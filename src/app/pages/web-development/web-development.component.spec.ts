import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentComponent } from './web-development.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WebDevelopmentComponent', () => {
  let component: WebDevelopmentComponent;
  let fixture: ComponentFixture<WebDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ WebDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
