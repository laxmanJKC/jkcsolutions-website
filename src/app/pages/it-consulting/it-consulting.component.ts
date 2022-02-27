import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-it-consulting',
  templateUrl: './it-consulting.component.html',
  styleUrls: ['./it-consulting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItConsultingComponent implements OnInit {

  constructor(@Inject(APP_BASE_HREF) private baseHref: String) { }

  ngOnInit(): void {
  }

  public getHref(): String {
    return this.baseHref;
  }
}
