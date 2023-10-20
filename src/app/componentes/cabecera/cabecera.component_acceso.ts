import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component_acceso.html',
  styles: [
  ]
})
export class CabeceraComponent implements AfterViewInit {

  @ViewChild('someInput') etiquetaImg!: ElementRef;

  ngAfterViewInit(): void {
      this.etiquetaImg!.nativeElement.src = "../assets/images/angular.png";
    }
}
