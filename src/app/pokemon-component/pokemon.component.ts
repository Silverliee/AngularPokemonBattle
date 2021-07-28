import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemonOne : any;
  @Input() pokemonTwo : any;
  @Input() pokemonOneBaseHp : any;
  @Input() pokemonTwoBaseHP : any;


  constructor() {
  }

  ngOnInit(): void {
  }

}
