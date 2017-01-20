import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
// import 'rxjs/add/operator/timeout';
@Injectable()
export class PhilgoApi {
  constructor(private http: Http) { }
  ping( url, timeOut ) {
    return this.http
      .get( url )
      .timeout( timeOut ) //from philgo ping to make sure timeout is synced with pingLoop()
      .map(res => res.json());
  }
}