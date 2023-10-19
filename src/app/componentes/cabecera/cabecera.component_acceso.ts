import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component_acceso.html',
  styles: [
  ]
})
export class CabeceraComponent {

  @ViewChild('someInput') etiquetaImg?: ElementRef;

  constructor(private renderer: Renderer2) { }

  addAttribute() {

    this.renderer.setAttribute(this.etiquetaImg?.nativeElement, 'src', '../assets/images/angular.png');

  }

}
