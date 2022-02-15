import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaasComponent } from './cdaas.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CdaasComponent', () => {
  let component: CdaasComponent;
  let fixture: ComponentFixture<CdaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CdaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
