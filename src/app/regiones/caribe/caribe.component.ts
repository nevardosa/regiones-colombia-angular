import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caribe',
  templateUrl: './caribe.component.html',
  styleUrls: ['./caribe.component.css']
})
export class CaribeComponent implements OnInit {
 
  descripcionCaribe = 'La región Caribe​​​ de Colombian está ubicada en la zona norte de Colombia. Limita al norte con el mar Caribe, al que debe su nombre, al Oriente con Venezuela, al sur con la región Andina y al Occidente con la región del Pacífico. La base económica de la región Caribe es variada, se destacan la agricultura, la ganadería, la minería, la industria, el turismo y el transporte marítimo.'

  constructor() { }

  ngOnInit(): void {
  }

}
