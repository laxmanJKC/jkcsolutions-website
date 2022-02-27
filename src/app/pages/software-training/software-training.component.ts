import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-software-training',
  templateUrl: './software-training.component.html',
  styleUrls: ['./software-training.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareTrainingComponent implements OnInit {

  private courses: string[];

  constructor(@Inject(APP_BASE_HREF) private baseHref: String) {
    this.courses = [
      "DevOps with AWS",
      "Azure DevOps"
    ]
   }

  ngOnInit(): void {
  }

  public getHref(): String {
    return this.baseHref;
  }

  public getCourses(): String[] {
    return this.courses;
  }
}
