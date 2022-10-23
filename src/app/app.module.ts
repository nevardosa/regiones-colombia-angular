import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DescripcionColombiaComponent } from './regiones/descripcion-colombia/descripcion-colombia.component';
import { CaribeComponent } from './regiones/caribe/caribe.component';
import { PacificoComponent } from './regiones/pacifico/pacifico.component';
import { OrinoquiaComponent } from './regiones/orinoquia/orinoquia.component';
import { AmazoniaComponent } from './regiones/amazonia/amazonia.component';
import { AndinaComponent } from './regiones/andina/andina.component';
import { InsularComponent } from './regiones/insular/insular.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionColombiaComponent,
    CaribeComponent,
    PacificoComponent,
    OrinoquiaComponent,
    AmazoniaComponent,
    AndinaComponent,
    InsularComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
