import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacifico',
  templateUrl: './pacifico.component.html',
  styleUrls: ['./pacifico.component.css']
})
export class PacificoComponent implements OnInit {

  descripcionPacifico = 'La región del Pacífico​ comprende casi la totalidad del departamento del Chocó, y las zonas costeras de los departamentos del Valle del Cauca, Cauca y Nariño. La economía de la región costera del Pacífico nariñense se basa principalmente en la agricultura, la pesca, la actividad forestal y el turismo.'

  constructor() { }

  ngOnInit(): void {
  }

}
