import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fight-description',
  templateUrl: './fight-description.component.html',
  styleUrls: ['./fight-description.component.css']
})
export class FightDescriptionComponent implements OnInit {
  @Output("parentPlayGame") parentPlayGame: EventEmitter<any> = new EventEmitter();
  @Input() play: any ;
  @Input() winner: any ;
  @Input() message: any ;
  todayDate: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }
  playGame(){
    this.parentPlayGame.emit()
  }

}
