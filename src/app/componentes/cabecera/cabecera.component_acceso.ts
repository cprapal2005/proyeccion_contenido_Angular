import { Component, Input } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component_acceso.html',
  styles: [
  ]
})
export class CabeceraComponent {

  @Input() src: string = "";


}
