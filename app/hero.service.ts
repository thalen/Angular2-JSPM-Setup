import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';




let apiURL = 'http://localhost/api';
@Injectable()
export class HeroService {
  constructor(private _http:Http) {}

  getHeroes() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000)
    );
  }

  getHero(id: number) {

    //var map_1 = require('../../operator/map');

    //console.log(Observable_1);

    let result = this._http.get(apiURL);
    console.log("result before subscribe");
    let o = new Observable();
    console.log("Map: " + o.map);
    result.map(res => res.text());
    result.subscribe(data => console.log("result: " + JSON.stringify(data)));
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }

  handleError(error) {
        console.error(error);
        //return Observable.throw(error.json().error || 'Server error');
    }
}
