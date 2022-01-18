import { Inject, Injectable } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  constructor(@Inject(APP_BASE_HREF) private _baseHref: string) { }

  public getBaseHref(): String {
    return this._baseHref;
  }
}
