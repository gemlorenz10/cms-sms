import { Component, Input, ViewChild } from '@angular/core';
//Services
import { PhilgoApi } from '../../providers/philgo-api';
//import { PingService } from '../../providers/ping-service'
//Components
import { SirenComponent } from '../siren/siren';


import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'philgo-ping',
  templateUrl: 'philgo-ping.html',
  providers:[SirenComponent]
})
export class PhilgoPingComponent {
//config
  timeOut:number = 1000;  //timeout delay for request to retry in millisecond
  barLength:number = 1000; // lenght of the bar: 290 max

//
@Input() graphUrl:String;
@Input() label:String;
@ViewChild('sound') siren:SirenComponent;


barColor;
responseData = [];
 constructor( private philgo: PhilgoApi, private sirenComponent: SirenComponent ){
    
    this.pingLoop();

 }
 

//Function to request Data from server
  pingLoop() {

        this.philgo.ping( this.graphUrl )  // url will be passed into http service function
                 // .timeout(this.timeOut)
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
        this.sirenComponent.counter = []; //variable from siren component set to 0.
        this.sirenComponent.sendCount = 0;       // Reset send pattern when ..
        this.sirenComponent.dontSend = false;  //  Successful

  }

  handleError( err ){

        let error = {}
        if ( err.status == 0 ){
          error = { server : this.label,
                    url: 'No URL found in response body',
                    message :
                    `No Message found in response body. 
                    Check the server to server to know the problem.`,
                    status : err.status };
        } else {
          error = { server : this.label,
                    url: err.url,
                    message : err.statusText,
                    status : err.status };
        }
        this.siren.soundSiren( error ); // as a child function
        // this.sirenComponent.sendPattern( error ); // as a provider
        this.handleResponse( error ); // red bar
        console.log( 'From parent COmponent', error )

    }
  //Handle the response from server
  handleResponse( data ){

        this.responseData.push( data );
        //limit bar lenght to 285
        if (this.barLength > 285) this.barLength = 285;
        if ( this.responseData.length == this.barLength + 1 ){
            this.responseData.shift();
        }

  } 


}