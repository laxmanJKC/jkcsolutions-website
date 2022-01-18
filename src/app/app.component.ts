import { Component } from '@angular/core';
import { BaseurlService } from './services/baseurl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jkcsolutions-website';

  constructor(private baseurlService: BaseurlService) {
    console.log("base href url:"+this.baseurlService.getBaseHref());
  }
}
