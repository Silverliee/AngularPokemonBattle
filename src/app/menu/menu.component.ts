import { Component, OnInit } from '@angular/core';
import {getPokemons} from "../../Backend/Middleware/ApiInterface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  allPokemons :any;
  firstPokemons :any;
  secondPokemons :any;
  choosed : boolean = false;

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
    if(this.secondPokemons){
      this.choosed = true
    }
  }

  async choiceSecondPokemon(id: number) {
    this.secondPokemons = id;
    if(this.firstPokemons){
      this.choosed = true
    }
  }

}
