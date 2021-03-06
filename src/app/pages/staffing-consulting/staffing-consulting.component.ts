import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-staffing-consulting',
  templateUrl: './staffing-consulting.component.html',
  styleUrls: ['./staffing-consulting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StaffingConsultingComponent implements OnInit {

  constructor(@Inject(APP_BASE_HREF) public baseHref: String) { }

  ngOnInit(): void {
  }

  public getHref(): String {
    return this.baseHref;
  }
}
