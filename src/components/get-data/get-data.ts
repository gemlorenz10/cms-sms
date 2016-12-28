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
  showBar:boolean = false;
  stampContainer = [];
  removeIndex; //store shifted index then erase it/

 getData:any;
 constructor( private httpService: HttpService ) {
     this.getData = httpService

  }
//On initialize
 ngOnInit(){
    this.getRequest( this.getData )
  }

  handleSuccess( data ){
    //append bar when ok
    this.showBar = !this.showBar;
    this.stampContainer.push( data );
    
    if ( this.stampContainer.length == this.barLength + 1 ){
      this.removeIndex = this.stampContainer.shift();
      console.log( 'must not equal to null or undefined', this.removeIndex )
    }
    this.removeIndex = null;
    console.log( 'removed index mus be equal to null', this.removeIndex )
    console.log( this.stampContainer.length )
  }

  handleError( err: any ){
    //send sms with error
      console.error('error', err)

  }

  onClickGetRequest( getData ) {
    console.log( 'onClickGetRequest' );
    this.getRequest( getData )
  }
//Re-usable functions
  getRequest(getData){
    getData.request()
        .subscribe( 
           (re) => this.handleSuccess(re.stamp),
           (error) => this.handleError(error))
           setTimeout( ()=>{this.getRequest( this.getData )}, this.timeOut );
  }
}