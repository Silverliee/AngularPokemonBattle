import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonVisuelsComponent } from './pokemon-visuels.component';

describe('PokemonVisuelsComponent', () => {
  let component: PokemonVisuelsComponent;
  let fixture: ComponentFixture<PokemonVisuelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonVisuelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonVisuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
