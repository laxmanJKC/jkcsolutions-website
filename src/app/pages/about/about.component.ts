import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  constructor(private navigationService: NavigationService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.navigationService.navigate();
    this.titleService.addTitle();
  }

}
