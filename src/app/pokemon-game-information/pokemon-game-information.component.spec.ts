import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGameInformationComponent } from './pokemon-game-information.component';

describe('PokemonGameInformationComponent', () => {
  let component: PokemonGameInformationComponent;
  let fixture: ComponentFixture<PokemonGameInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGameInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGameInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
