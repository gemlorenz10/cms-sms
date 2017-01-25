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
  noInternet:boolean = true;
  
  constructor() {
    this.checkInternet();
 }

  ngOnInit(){
     this.checkInternet();
  }

  checkInternet(){
      window.addEventListener("offline", () => { 
         this.noInternet = true;
         this.checkConnectionEmitter( { 'connection': false } );
         setTimeout(() => this.checkInternet(), 1000); //call it again to keep the program running..
               console.log( 'checkInternet' )
    });

     window.addEventListener("online", () => { 
        this.noInternet = false;
        this.checkConnectionEmitter( { 'connection': true } );
              console.log( 'checkInternet online!' )
    });

  }


  checkConnectionEmitter(e){
    return this.isConnected.emit(e);
  }

}