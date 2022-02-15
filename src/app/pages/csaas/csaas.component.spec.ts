import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaasComponent } from './csaas.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CsaasComponent', () => {
  let component: CsaasComponent;
  let fixture: ComponentFixture<CsaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CsaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
