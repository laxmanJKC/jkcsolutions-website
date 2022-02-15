import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingConsultingComponent } from './staffing-consulting.component';

describe('StaffingConsultingComponent', () => {
  let component: StaffingConsultingComponent;
  let fixture: ComponentFixture<StaffingConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
