import { Component, Input } from '@angular/core';
//Services
import { HttpService } from '../../providers/http';

//import { Http } from '@angular/http';

import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/expand';
/*
  Generated class for the GetData component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'website-monitor',
  templateUrl: 'get-data.html',
  providers: [HttpService]
})
export class GetDataComponent {
//config
  timeOut:number = 500;  //timeout delay for request to retry in millisecond
  barLength:number = 1000; // lenght of the bar: 290 max

//
@Input() graphUrl:String;
@Input() label:String;

//program variables
barColor; // if true green else red
responseData = [];
httpServe:any;
removeIndex;

 constructor( private httpService: HttpService ) {
     this.httpServe = httpService
     //this.graphUrl = httpService.requestUrl
  }
//On initialize
 ngOnInit(){
    this.handleRequest( this.httpServe )
  }


//Function to request Data from server
  handleRequest( httpServe ){
    httpServe.request( this.graphUrl )  // url will be passed into http service function
        .subscribe( 
           ( re ) => this.handleSuccess( re ), //get the data
           ( error ) => this.handleError( error )) //get http status code
           setTimeout( ()=>{ this.handleRequest( this.httpServe ) }, this.timeOut );
  }

//Re-usable functions
  handleSuccess( data ){
    let success = {
      stamp : data.stamp,
      status : '200'
    }
    this.handleResponse( success )  
}

  handleError( err: any ){
    let error = {
      stamp : err[ '_body' ].timeStamp,
      status : err.status
    }
    //send sms with error
     this.handleResponse( error )
  }
//Handle the response from server
  handleResponse( data ){
    //append bar
    this.responseData.push( data );
    //limit bar lenght
    if (this.barLength > 285) this.barLength = 285;
    if ( this.responseData.length == this.barLength + 1 ){
      this.removeIndex = this.responseData.shift();
      //console.log( 'must not equal to null or undefined', this.removeIndex )
          }
    this.removeIndex = null;
   // console.log( this.removeIndex )
  }
}