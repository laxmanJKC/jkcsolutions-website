import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-cdaas',
  templateUrl: './cdaas.component.html',
  styleUrls: ['./cdaas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CdaasComponent implements OnInit {

  constructor(private navigationService: NavigationService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.navigationService.navigate();
    this.titleService.addTitle();
  }

}
