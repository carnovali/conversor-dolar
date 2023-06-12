import { Component, Input } from '@angular/core';
import { DolarTipo } from 'src/app/interfaces/dolartipo.model';

@Component({
  selector: 'cotizacion-item',
  templateUrl: './cotizacion-item.component.html',
  styleUrls: ['./cotizacion-item.component.css'],
})
export class CotizacionItemComponent {
  @Input() classType: string;
  @Input() cotizacionTotal!: DolarTipo | null;
  @Input() cotizacionTipo!: string;

  constructor() {
    this.classType = 'main';
  }

  isNotShowable(value: any): boolean {
    return value === Infinity;
  }
}
