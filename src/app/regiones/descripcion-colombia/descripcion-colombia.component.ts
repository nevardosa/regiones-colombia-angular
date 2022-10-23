import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion-colombia',
  templateUrl: './descripcion-colombia.component.html',
  styleUrls: ['./descripcion-colombia.component.css']
})
export class DescripcionColombiaComponent implements OnInit {

  
  descripcionGeneral = '  Colombia cuenta con seis regiones naturales que se definen por las características del relieve, la distancia al mar, el promedio de lluvias y las condiciones del suelo. Esas regiones son: amazonia, andina, Caribe, Insular, Pacífica y orinoquía.' +
    'Debido a que se encuentra en la esquina del continente es el único país en América del Sur con acceso privilegiado a dos océanos Pacífico y Atlántico.'
    subTituloOrinoquia = 'Region orinoquia';
    subTituloCaribe = 'Region caribe';
    subTituloAmazonia = 'Region Amazonia';
    subTituloAndina = 'Region Andina';
    subTituloInsular = 'Region Insular';
    subTituloPacifica = 'Region Pacifica';




  constructor() { }

  ngOnInit(): void {
  }

}
