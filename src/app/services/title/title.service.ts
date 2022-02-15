import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, NavigationEnd} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title, private metaService: Meta, private router: Router) { }

  addTitle() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        const meta = this.getContent(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        const keywords: MetaDefinition = {
          name: 'keywords',
          content: meta
        };
        this.metaService.updateTag(keywords, `name='keywords'`);
        console.log('Meta Tags: ' + meta);
      }
    });
  }

  getTitle(state: any, parent: any): any {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  getContent(state:any, parent: any) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.content) {
      data.push(parent.snapshot.data.content);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
