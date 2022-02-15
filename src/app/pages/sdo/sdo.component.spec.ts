import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdoComponent } from './sdo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SdoComponent', () => {
  let component: SdoComponent;
  let fixture: ComponentFixture<SdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
