import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOppsComponent } from './pokemon-opps.component';

describe('PokemonOppsComponent', () => {
  let component: PokemonOppsComponent;
  let fixture: ComponentFixture<PokemonOppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonOppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonOppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
