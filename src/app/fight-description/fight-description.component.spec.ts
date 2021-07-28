import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightDescriptionComponent } from './fight-description.component';

describe('FightDescriptionComponent', () => {
  let component: FightDescriptionComponent;
  let fixture: ComponentFixture<FightDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
