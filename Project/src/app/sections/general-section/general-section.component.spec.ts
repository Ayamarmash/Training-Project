import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSectionComponent } from './general-section.component';

describe('GeneralSectionComponent', () => {
  let component: GeneralSectionComponent;
  let fixture: ComponentFixture<GeneralSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
