import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazonia',
  templateUrl: './amazonia.component.html',
  styleUrls: ['./amazonia.component.css']
})
export class AmazoniaComponent implements OnInit {
  descripcionAmazonia = 'La región Amazónica de Colombia, o Amazonía, está ubicada al sur del país limitando al norte con las regiones Andina y Orinoquía, al este con Venezuela, al sureste con Brasil, al sur con Perú y al suroeste con Ecuador. La amazonia tiene como actividad económica la pesca, la minería, la ganadería y la extracción forestal.'

  constructor() { }

  ngOnInit(): void {
  }

}
