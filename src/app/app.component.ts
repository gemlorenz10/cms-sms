import { Component } from '@angular/core';
//import { PingService } from '../providers/ping-service';
declare let Ping;
@Component({
  selector: `app-component`,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
// ipList = [{query: 'www.philgo.com', timeout: 1,retry: 3,version:'v4'},
//                 {query: 'www.witheng.com', timeout: 2,'retry': 3,version:'v6'}];
//   p;
  constructor( ) {
    // this.p = new Ping();
    document.addEventListener("deviceready", () => this.onDevinceReady(), false);
  }
  onDevinceReady() {
   console.log("yes, I am running in cordova.");
    
  //    this.p.ping(this.ipList, this.success, this.err);
  //   }


  // success(results) {
  //       console.log(results);
  //     }
  // err(e) {
  //       console.log('Error: ' + e);
    }
  }