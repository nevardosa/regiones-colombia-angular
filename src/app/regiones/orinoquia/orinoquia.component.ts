import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orinoquia',
  templateUrl: './orinoquia.component.html',
  styleUrls: ['./orinoquia.component.css']
})
export class OrinoquiaComponent implements OnInit {

  descripcionRegion = 'La orinoquia, tambien conocida como los llanos orientales, está ubicada al oriente del país, limitando al norte y este con Venezuela, al sur con Amazonia y al oeste con la región andina. La economía de los Llanos se basa principalmente en la ganadería extensiva y en la extracción de petróleo.';
  constructor() { }

  ngOnInit(): void {
  }

}
