import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareDevelopmentComponent implements OnInit {

  constructor(@Inject(APP_BASE_HREF) public baseHref: String) { }

  ngOnInit(): void {
  }

  public getHref(): String {
    return this.baseHref;
  }

}
