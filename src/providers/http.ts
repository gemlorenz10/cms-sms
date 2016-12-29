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

request;
  constructor(private http: Http) {
        this.request = ( url ) => { //url is from get-data component
               return http
                        .get( url )
                        .map(res => res.json())
          }
    }
}