import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/catch';
/*
  Generated class for the Http provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
response;
request;
  constructor(private http: Http) {
        this.request = () => { 
                //return http.get('http://www.philgo.com/?module=ajax&action=version&submit=1')
              return http
                        .get('http://localhost/sample.php')
                        .retry(5)
                        //.catch( this.handleError )
                        .delay(1000)
                        .map(res => res.json()
                        )
          }
    }
}