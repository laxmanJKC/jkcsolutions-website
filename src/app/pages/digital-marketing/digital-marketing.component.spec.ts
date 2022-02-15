import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingComponent } from './digital-marketing.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DigitalMarketingComponent', () => {
  let component: DigitalMarketingComponent;
  let fixture: ComponentFixture<DigitalMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ DigitalMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
