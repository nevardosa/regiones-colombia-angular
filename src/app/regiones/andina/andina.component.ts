import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andina',
  templateUrl: './andina.component.html',
  styleUrls: ['./andina.component.css']
})
export class AndinaComponent implements OnInit {

  descripcionAndina = 'La región Andina está ubicada en el centro del país, limitando al norte con la región Caribe, al noreste con Venezuela, al este con la Orinoquía, al sureste con la Amazonia, al sur con Ecuador y al oeste con la región del Pacífico. En la región andina se encuentra más del 80% de los cultivos de café del país, distribuidos principalmente en el Eje Cafetero'

  constructor() { }

  ngOnInit(): void {
  }

}
