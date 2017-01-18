import { Component } from '@angular/core';
//import { PingService } from '../providers/ping-service';
declare let app;
@Component({
  selector: `app-component`,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor( ) {
    document.addEventListener("deviceready", () => this.onDevinceReady(), false);
  
}
  onDevinceReady() {
   console.log("yes, I am running in cordova.");

    }
    ngOnDestroy(){
    }

  }