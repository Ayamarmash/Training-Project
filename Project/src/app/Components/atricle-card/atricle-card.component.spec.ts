import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtricleCardComponent } from './atricle-card.component';

describe('AtricleCardComponent', () => {
  let component: AtricleCardComponent;
  let fixture: ComponentFixture<AtricleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtricleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtricleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
