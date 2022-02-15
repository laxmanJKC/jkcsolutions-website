import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebDevelopmentComponent implements OnInit {

  constructor(private navigationService: NavigationService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.navigationService.navigate();
    this.titleService.addTitle();
  }

}
