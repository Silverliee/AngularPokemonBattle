import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { GameComponent } from './game/game.component';
import { PokemonOppsComponent } from './pokemon-opps/pokemon-opps.component';
import { PokemonVisuelsComponent } from './pokemon-visuels/pokemon-visuels.component';
import { PokemonActionBarComponent } from './pokemon-action-bar/pokemon-action-bar.component';
import { PokemonGameInformationComponent } from './pokemon-game-information/pokemon-game-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    GameComponent,
    PokemonOppsComponent,
    PokemonVisuelsComponent,
    PokemonActionBarComponent,
    PokemonGameInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
