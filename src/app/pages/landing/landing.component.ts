import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  constructor(@Inject(APP_BASE_HREF) public baseHref: String) { }

  ngOnInit(): void {
    /*const typed = new Typed('#typeId', {
      strings: [
        'Save Deployment time with Our Automation Solution.',
        'Bring your business online.',
        'Cloud Services Supports.',
        'One stop Solution to Infrastructure.',
        'Lead generation with Chat BOTs.',
        'Grow your business with Odoo Solution.'
      ],
      typeSpeed: 40,
      startDelay: 400,
      backDelay: 3000,
      loop: true,
      fadeOut: false
    });*/
  }

  public getHref(): String {
    return this.baseHref;
  }

}
