import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeAll';

let apiURL = 'http://localhost/api';
@Injectable()
export class HeroService {
  constructor(private _http:Http) {}

  getHeroes() {
    let result = this._http.get(apiURL + '/heroes');
    return result.map(res => res.json());
  }

  getHero(id: number) {
    let result = this._http.get(apiURL + '/heroes');
    return result
      .map(res => res.json())
      .mergeAll()
      .first(hero => hero.id === id);
  }

  handleError(error) {
        console.error(error);
        //return Observable.throw(error.json().error || 'Server error');
    }
}
