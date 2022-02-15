import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-sdo',
  templateUrl: './sdo.component.html',
  styleUrls: ['./sdo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SdoComponent implements OnInit {

  constructor(private navigationService: NavigationService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.navigationService.navigate();
    this.titleService.addTitle();
  }

}
