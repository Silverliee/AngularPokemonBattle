import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonActionBarComponent } from './pokemon-action-bar.component';

describe('PokemonActionBarComponent', () => {
  let component: PokemonActionBarComponent;
  let fixture: ComponentFixture<PokemonActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
