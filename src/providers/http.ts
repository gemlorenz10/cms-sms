import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Http provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  stamp;
  constructor(public http: Http) {
    
    this.stamp = this.http.get('http://www.philgo.com/?module=ajax&action=version&submit=1')
                .map( e => e.json() )
                .subscribe( re => {
                   return re.stamp;
                });
                
    }
}