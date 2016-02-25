import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
//import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import 'rxjs/add/operator/map'

let apiURL = 'http://localhost/api';
@Injectable()
export class HeroService {
  constructor(private _http:Http) {}

  getHeroes() {
    let result = this._http.get(apiURL)
            .map(res => res.json());
    result.subscribe(data => console.log("result: " + JSON.stringify(data)));
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000)
    );
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }

  handleError(error) {
        console.error(error);
        //return Observable.throw(error.json().error || 'Server error');
    }
}
