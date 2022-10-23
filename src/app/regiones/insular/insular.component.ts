import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insular',
  templateUrl: './insular.component.html',
  styleUrls: ['./insular.component.css']
})
export class InsularComponent implements OnInit {

  descripcionInsular = 'La región insular comprende el conjunto de las islas, cayos e islotes continentales y aquellos alejadas de las costas, como son el Archipiélago de San Andrés y Providencia en el mar Caribe y las islas Malpelo y Gorgona en el océano Pacífico. La economía de la Región Insular se enfocan en la obtención de recursos de la naturaleza y la prestación de servicios como el turismo y el comercio.'

  constructor() { }

  ngOnInit(): void {
  }

}
