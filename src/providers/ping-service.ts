import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
declare let Ping;

@Injectable()
export class PingService {

ipList = [{query: 'w6.philgo.com', timeout: 1,retry: 3,version:'v4'},
          {query: 'w7.philgo.com', timeout: 2,'retry': 3,version:'v4'}];

  constructor() {
  }
success(results) {
   console.log(results);
  }
error(e) {
    console.log('Error: ' + e);
  }

  pingNode(){
   Ping(this.ipList,
          (r) => { this.success(r); },
          (e) => { this.error(e); } 
          );
          console.log('pingNode')
  }
}