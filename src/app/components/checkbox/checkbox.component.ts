import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  sample_2 = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.navigate();
  }

}
