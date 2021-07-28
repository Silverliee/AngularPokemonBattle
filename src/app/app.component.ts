import {Component} from '@angular/core';
import {Game} from "../Backend/Entity/Game";
import {attack, whoPlayFirst} from "../Backend/Middleware/GameInterface";
import {getPokemonById, getPokemons} from "../Backend/Middleware/ApiInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "title";

  constructor() {
  }

}
