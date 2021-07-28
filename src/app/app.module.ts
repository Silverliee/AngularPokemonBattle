import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PokemonComponent} from "./pokemon-component/pokemon.component";
import {FightDescriptionComponent} from "./fight-description/fight-description.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonComponent,
    FightDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
