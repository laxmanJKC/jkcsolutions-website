import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check default value of checkbox', () => {
    const sample2 = fixture.debugElement.query(By.css('.toggle-checkbox'));
    expect(component.sample_2).toEqual(sample2.nativeElement.checked);
  });

  it('click on checkbox sample_2', () => {
    const sample2 = fixture.debugElement.query(By.css('.toggle-checkbox'));
    sample2.nativeElement.click();
    fixture.detectChanges();
    expect(sample2.nativeElement.checked).toBeTruthy();
  });
});
