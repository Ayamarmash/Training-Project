import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderCardComponent } from './food-order-card.component';

describe('FoodOrderCardComponent', () => {
  let component: FoodOrderCardComponent;
  let fixture: ComponentFixture<FoodOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
