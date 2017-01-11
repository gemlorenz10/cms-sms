import { Component, Input, ViewChild } from '@angular/core';
//Services
import { PhilgoApi } from '../../providers/philgo-api';

//Components
import { SirenComponent } from '../siren/siren';


import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/expand';


@Component({
  selector: 'philgo-ping',
  templateUrl: 'philgo-ping.html'
})
export class PhilgoPingComponent {
//config
  timeOut:number = 2000;  //timeout delay for request to retry in millisecond
  barLength:number = 1000; // lenght of the bar: 290 max

//
@Input() graphUrl:String;
@Input() label:String;
@ViewChild('sound') siren:SirenComponent;

barColor;
responseData = [];
removeIndex;
 constructor( private philgo: PhilgoApi ) {
   this.pingLoop();
 }
 

//Function to request Data from server
  pingLoop() {
    this.philgo.ping( this.graphUrl )  // url will be passed into http service function
        .subscribe( 
           ( re ) => this.handleSuccess( re ), //get the data
           ( error ) => this.handleError( error )) //get http status code
           setTimeout( ()=>{ this.pingLoop() }, this.timeOut );
  }

//Re-usable functions
  handleSuccess( data ){
    let success = {
      stamp : data.stamp,
      status : '200'
    }
    this.handleResponse( success );
    this.siren.counter = []; //variable from siren component set to 0.
}

  handleError( err: any ){
    let error = {
      stamp : err[ '_body' ].timeStamp,
      status : err.status
    }
    this.siren.soundSiren( this.label ); // play sound
    this.handleResponse( error ); // red bar
  }
//Handle the response from server
  handleResponse( data ){
    this.responseData.push( data );
    //limit bar lenght to 285
    if (this.barLength > 285) this.barLength = 285;
    if ( this.responseData.length == this.barLength + 1 ){
      this.removeIndex = this.responseData.shift();
          }
    this.removeIndex = null;
  }
}