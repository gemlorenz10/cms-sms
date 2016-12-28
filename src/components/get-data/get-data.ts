import { Component, OnInit } from '@angular/core';
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
  selector: 'get-data',
  template: '<div *ngFor="let stamp of stampContainer" >{{ stamp }}</div><br>',
  providers: [HttpService]
})
export class GetDataComponent implements OnInit {
//config
  timeOut:number = 1000;  //timeout delay for request to retry in millisecond
  barLength:number = 5; // lenght of the bar

//program variables
  stampContainer = [];
  removeIndex; //store shifted index then erase it/

 httpServe:any;
 constructor( private httpService: HttpService ) {
     this.httpServe = httpService

  }
//On initialize
 ngOnInit(){
    this.handleRequest( this.httpServe )
  }


//Function to request Data from server
  handleRequest( httpServe ){
    httpServe.request()
        .subscribe( 
           (re) => this.handleSuccess(re.stamp), //get the data
           (error) => this.handleError(error.status)) //get http status code
           setTimeout( ()=>{this.handleRequest( this.httpServe )}, this.timeOut );
  }



//Re-usable functions
  handleSuccess( data ){
     this.handleResponse( data )
  }

  handleError( err: any ){
    //send sms with error
     this.handleResponse( err )
  }
//Handle the response from server
  handleResponse( data ){
    //append bar
    this.stampContainer.push( data );
    //limit bar lenght
    if ( this.stampContainer.length == this.barLength + 1 ){
      this.removeIndex = this.stampContainer.shift();
      console.log( 'must not equal to null or undefined', this.removeIndex )
    }
    
    this.removeIndex = null;
    console.log( 'removed index mus be equal to null', this.removeIndex )
    console.log( this.stampContainer.length )

  }
}