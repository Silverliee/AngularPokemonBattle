import {Component, OnInit} from '@angular/core';
import {getPokemonById} from "../../Backend/Middleware/ApiInterface";
import {Game} from "../../Backend/Entity/Game";
import {attack, whoPlayFirst} from "../../Backend/Middleware/GameInterface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-arena',
  templateUrl: './game-arena.component.html',
  styleUrls: ['./game-arena.component.css']
})
export class GameArenaComponent implements OnInit {
  play: boolean = false;
  title = 'Pokeapp';
  pokemonTwo: any;
  pokemonOne: any;
  pokemonOneBaseHP: any;
  pokemonTwoBaseHP: any;
  message: any;
  damage: any;
  winner: any;
  sleepNow = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

  constructor(private route: ActivatedRoute) {
    this.createPokemon().then(() => "ok");
  }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  async createPokemon() {
    this.pokemonOne = await getPokemonById(this.route.snapshot.params["id1"]);
    this.pokemonTwo = await getPokemonById(this.route.snapshot.params["id2"]);
    this.pokemonOneBaseHP = this.pokemonOne.hp
    this.pokemonTwoBaseHP = this.pokemonTwo.hp
  }

  public async playGame(): Promise<void> {
    this.play = !this.play;
    const game = new Game(this.pokemonOne, this.pokemonTwo, whoPlayFirst(this.pokemonOne, this.pokemonTwo));
    while (game.status !== "finish" && this.play) {
      await this.sleepNow(1000)
      if (game.pokemonOne.id == game.turn) {
        let random1 = this.getRandomInt(10)
        this.damage = await attack(this.pokemonOne._abilities[random1.toString()].move.url, game.pokemonOne, game.pokemonTwo);
        this.message = this.pokemonOne.name.toUpperCase() + " attaque " + this.pokemonTwo.name.toUpperCase() + " avec l'attaque " + this.pokemonOne._abilities[random1.toString()].move.name + " et cause " + this.damage.toFixed(2) + " dommages !"

        game.turn = game.pokemonTwo.id;
      } else {
        let random2 = this.getRandomInt(10)
        this.damage = await attack(this.pokemonOne._abilities[random2.toString()].move.url, game.pokemonTwo, game.pokemonOne);
        this.message = this.pokemonTwo.name.toUpperCase() + " attaque " + this.pokemonOne.name.toUpperCase() + " avec l'attaque " + this.pokemonTwo._abilities[random2.toString()].move.name + " et cause " + this.damage.toFixed(2) + " dommages !"
        game.turn = game.pokemonOne.id;
      }
      if (game.pokemonOne.hp <= 0) {
        game.status = "finish";
      }
      if (game.pokemonTwo.hp <= 0) {
        game.status = "finish";
      }
    }
    if (game.pokemonOne.hp <= 0 || game.pokemonTwo.hp <= 0) {
      const winner = game.pokemonOne.hp > this.pokemonTwo.hp ? game.pokemonOne.name : game.pokemonTwo.name;
      this.winner = "Le gagnant est " + winner.toUpperCase() + "!"
    }
  }

}
