import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Http provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
//config
requestUrl:string = 'http://localhost/sample.php';
//requestUrl:string = 'http://www.philgo.com/?module=ajax&action=version&submit=1';


request;
  constructor(private http: Http) {
        this.request = () => { 
               return http
                        .get( this.requestUrl )
                        .map(res => res.json())
          }
    }
}