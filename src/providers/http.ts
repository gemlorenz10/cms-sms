import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/delay';
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
                    .get('http://www.philgo.com/?module=ajax&action=version&submit=1')
                    .delay(2000)
                     .map(res => res.json()) /*{ 
                          // If request fails, throw an Error that will be caught 
                          if(res.status != 200) {
                          console.log('-----------------------error--------------------') 
                          throw new Error('This request has failed ' + res.status); } // If everything went fine, return the response 
                          else {return res.json(); 
                          } })*/
                    .repeat(5);
    }
    
  }
}


//Link to another possible solution
// http://stackoverflow.com/questions/36628498/angular2-http-error-handling