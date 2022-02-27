import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTrainingComponent } from './software-training.component';

describe('SoftwareTrainingComponent', () => {
  let component: SoftwareTrainingComponent;
  let fixture: ComponentFixture<SoftwareTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
