import { Component, EventEmitter, Output } from '@angular/core';

//providers
//Components

/*
  Generated class for the Cms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cms',
  templateUrl: 'cms.html',
})



export class CmsPage {
@Output() isConnected = new EventEmitter();
  pageTitle ="Center Monitoring System"
  noInternet:boolean = false;
  
  constructor() {
    window.addEventListener("offline", () => { 
         this.noInternet = true;
         this.checkConnectionEmitter( { 'connection': false } );
     });

     window.addEventListener("online", () => { 
        this.noInternet = false;
        this.checkConnectionEmitter( { 'connection': true } );
      });
  }

  checkConnectionEmitter(e){
    return this.isConnected.emit(e);
  }

}