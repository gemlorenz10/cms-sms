import { Component } from '@angular/core';

//import { PingService } from '../providers/ping-service';

@Component({
  selector: `app-component`,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  route;
  constructor( ) {
    document.addEventListener("deviceready", () => this.onDevinceReady(), false);


}
  ngOnInit(){


  }
  onDevinceReady() {
   console.log("yes, I am running in cordova.");
    }
    ngOnDestroy(){
    }

  }