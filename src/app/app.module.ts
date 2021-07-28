import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PokemonComponent} from "./pokemon-component/pokemon.component";
import {FightDescriptionComponent} from "./fight-description/fight-description.component";
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { GameArenaComponent } from './game-arena/game-arena.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'game/:id1/:id2', component: GameArenaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonComponent,
    FightDescriptionComponent,
    MenuComponent,
    GameArenaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
