import { Injectable, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
   }

   navigate() {
     const weboxAppsHeader = <HTMLElement>this.document.getElementById("jkcSoltionsHeader");
     console.log("Navigation : "+weboxAppsHeader);
     this.addNavigateScroll(weboxAppsHeader);
     this.navigateUrl(weboxAppsHeader);
   }

   navigateUrl(weboxAppsHeader: HTMLElement) {
    if (['', '/', '/#'].indexOf(this.router.url) >= 0 && weboxAppsHeader) {
      weboxAppsHeader.classList.remove('navbar-fixed');
    } else if (weboxAppsHeader) {
      weboxAppsHeader.classList.add('navbar-fixed');
    }
   }

  addNavigateScroll(weboxAppsHeader: HTMLElement) {
    if(weboxAppsHeader) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150) {
          weboxAppsHeader.classList.add('navbar-fixed');
        } else if (['', '/', '/#'].indexOf(this.router.url) < 0) {
          weboxAppsHeader.classList.add('navbar-fixed');
        } else {
          weboxAppsHeader.classList.remove('navbar-fixed');
        }
      }, true);
    }
  }
}
