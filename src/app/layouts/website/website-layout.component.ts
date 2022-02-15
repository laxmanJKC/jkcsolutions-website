import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-website',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebsiteLayoutComponent implements OnInit {

  constructor(private navigationService: NavigationService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.navigationService.navigate();
    this.titleService.addTitle();
  }

}
