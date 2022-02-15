import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLayoutComponent } from './website-layout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WebsiteLayoutComponent', () => {
  let component: WebsiteLayoutComponent;
  let fixture: ComponentFixture<WebsiteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ WebsiteLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
