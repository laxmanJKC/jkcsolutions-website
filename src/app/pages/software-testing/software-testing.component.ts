import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareTestingComponent implements OnInit {

  constructor(@Inject(APP_BASE_HREF) private baseHref: String) { }

  ngOnInit(): void {
  }

  public getHref(): String {
    return this.baseHref;
  }
}
