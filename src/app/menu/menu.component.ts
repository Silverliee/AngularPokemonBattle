import { Component, OnInit } from '@angular/core';
import {getPokemonById, getPokemons} from "../../Backend/Middleware/ApiInterface";
import {Pokemon} from "../../Backend/Entity/Pokemon";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  allPokemons :any;
  firstPokemons :any;
  secondPokemons :any;

  async createPokemon() {
    this.allPokemons = await getPokemons();
  }
  constructor() {
    this.createPokemon().then(() => "ok")
  }

  ngOnInit(): void {
  }

  async choiceFirstPokemon(id: number) {
    this.firstPokemons = id;
  }

  async choiceSecondPokemon(id: number) {
    this.secondPokemons = id;
  }

}
