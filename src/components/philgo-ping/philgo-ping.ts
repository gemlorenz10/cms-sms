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
  timeOut:number = 5000;  //request timeout and setTimeout in pingloop()
  barLength:number = 290; // lenght of the bar: 285 max

//
@Input() graphUrl:String;
@Input() label:String;
@ViewChild('sound') siren:SirenComponent;


barColor;
responseData = [];
 constructor( private philgo: PhilgoApi, 
              private sirenComponent: SirenComponent ){



}
  ngOnInit() {
        this.pingLoop();
        }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  //Function to request Data from server
  subscription;
  pingLoop() {
    let url = this.graphUrl + '&dummy=' + (new Date).getTime();
     this.subscription = this.philgo.ping( url )  // url will be passed into http service function
                    .timeout(this.timeOut)
                    .subscribe( 
                      ( re ) => this.handleSuccess( re ), //get the data
                      ( error ) => this.handleError( error )) //get http status code
                      setTimeout( ()=>{ this.pingLoop() }, this.timeOut );

    }

//Re-usable functions
  handleSuccess( data ){

        let success = {
          stamp : data.stamp,
          status : '200'    // static value for status code when success.
        }
        this.handleResponse( success );
        this.siren.success();

  }

  handleError( err ){

        let error = {}
        if ( err.status == 0 || err.status == undefined ){
          error = { server : this.label,
                    url: 'No URL found in response body',
                    message :
                    `REQUEST TIME-OUT!!
                    Check the server to know the problem.`,
                    status : '0' };
        } else {
          error = { server : this.label,
                    url: err.url,
                    message : err.statusText,
                    status : err.status };
        }
        this.siren.soundSiren( error ); // function from child compoment SirenComponent
        this.handleResponse( error ); // append red bar

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