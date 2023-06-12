import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Currency } from 'src/app/models/cotizador-enums.model';

@Component({
  selector: 'show-currency',
  templateUrl: './show-currency.component.html',
  styleUrls: ['./show-currency.component.css'],
})
export class ShowCurrencyComponent implements OnChanges {
  @Input() currecyTipo!: string;
  public flagIco!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    switch (changes['currecyTipo'].currentValue) {
      case Currency.USD:
        this.flagIco = 'usa-flag';
        break;
      case Currency.ARS:
        this.flagIco = 'arg-flag';
        break;
    }
  }
}
