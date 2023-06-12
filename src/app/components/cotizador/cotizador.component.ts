import { Component, OnInit } from '@angular/core';
import { DolarTipo } from 'src/app/interfaces/dolartipo.model';
import { Currency } from '../../models/cotizador-enums.model';
import { GetCotizacionesService } from 'src/app/services/get-cotizaciones.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css'],
})
export class CotizadorComponent implements OnInit {
  public Currency = Currency;

  public lastUpdate!: string;
  private cotDolar: DolarTipo[];

  public currencies: string[];
  private currentAmountValue: number;
  public cotizacionResults: DolarTipo[];

  constructor(private getCotizacionesSvc: GetCotizacionesService) {
    this.cotDolar = [];
    this.currencies = [Currency.USD, Currency.ARS];
    this.currentAmountValue = 1.0;
    this.cotizacionResults = [];
  }

  ngOnInit(): void {
    this.loadUSDValues().subscribe(() => {
      this.getResults();
    });
    this.loadLastUpdate();
  }

  private loadUSDValues(): Observable<any> {
    return this.getCotizacionesSvc.getCotizaciones().pipe(
      tap((data) => {
        this.cotDolar = data;
      })
    );
  }

  private loadLastUpdate(): void {
    this.getCotizacionesSvc.getLastUpdate().subscribe((data) => {
      this.lastUpdate = `${data.fecha} ${data.hora}`;
    });
  }

  public onAmountChange(event: number): void {
    this.currentAmountValue = event;
    this.getResults();
  }

  public onChangeCurrency(): void {
    this.currencies.reverse();
    this.getResults();
  }

  private getResults(): void {
    this.cotizacionResults = [];
    let cotResults!: DolarTipo;
    for (let tipoDeCambio of this.cotDolar) {
      if (this.currencies[0] === Currency.USD) {
        cotResults = {
          nombre: tipoDeCambio.nombre,
          compra: tipoDeCambio.compra * this.currentAmountValue,
          venta: tipoDeCambio.venta * this.currentAmountValue,
        };
      } else if (this.currencies[1] === Currency.USD) {
        cotResults = {
          nombre: tipoDeCambio.nombre,
          compra: this.currentAmountValue / tipoDeCambio.compra,
          venta: this.currentAmountValue / tipoDeCambio.venta,
        };
      }
      this.cotizacionResults.push(cotResults as DolarTipo);
      cotResults = {} as DolarTipo;
    }
  }

  onClick() {
    console.log(this.currentAmountValue);
    console.log(this.cotDolar);
    console.log(this.cotizacionResults);
  }
}
