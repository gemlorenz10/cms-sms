import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'page-cms',
  templateUrl: 'cms.html',
})



export class CmsPage {
@Output() isConnected = new EventEmitter();
  pageTitle ="Center Monitoring System"
  noInternet:boolean;
  
  constructor() {

     this.checkInternet();

 }

  ngOnInit(){

    let status;
    status = navigator.onLine
    this.noInternet = !status;

     if (this.noInternet == true) setTimeout(() => this.loadingDot(), 2000)

    }
//
// Listen to network changes
//
  checkInternet(){

      window.addEventListener("offline", () => { 
         this.noInternet = true;
         setTimeout(() => this.loadingDot(), 2000)
         this.checkConnectionEmitter( { 'connection': false } );
               console.log( 'checkInternet offline' )
    });

     window.addEventListener("online", () => { 
        this.noInternet = false;
        this.checkConnectionEmitter( { 'connection': true } );
        clearInterval(this.dotdotdot)
              console.log( 'checkInternet online!' )
    });

  }

  checkConnectionEmitter(e){

    return this.isConnected.emit(e);

  }


    dotdotdot;
loadingDot(){

        let dotspan = document.getElementById("loading");
        this.dotdotdot = setInterval( () => {
        if(dotspan.innerHTML.length == 3) {
            dotspan.innerHTML = "";
        } else {
            dotspan.innerHTML += ".";
        }
        }, 1000);

    }

}