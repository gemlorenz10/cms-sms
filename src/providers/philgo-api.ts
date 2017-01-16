import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/timeout';
@Injectable()
export class PhilgoApi {
  constructor(private http: Http) { }
  ping( url ) {
    return this.http
      .get( url )
      .map(res => res.json());
  }
}