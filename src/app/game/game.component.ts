import {Component, OnInit} from '@angular/core';
import {getPokemonById} from "../../Backend/Middleware/ApiInterface";
import {Game} from "../../Backend/Entity/Game";
import {whoPlayFirst} from "../../Backend/Middleware/GameInterface";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  async createGame() {
    const pokemonOne: any = await getPokemonById(1);
    const pokemonTwo: any = await getPokemonById(2);
    return new Game(pokemonOne, pokemonTwo, whoPlayFirst(pokemonOne, pokemonTwo))
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
