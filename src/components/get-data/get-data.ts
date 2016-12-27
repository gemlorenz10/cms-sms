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
  selector: 'get-data',
  templateUrl: 'get-data.html',
  providers: [HttpService]
})
export class GetDataComponent {

  title: string = 'Get Data';
 @Input() getData:any;
 constructor( private httpService: HttpService ) {
     this.getData = httpService
              
  }
  stamp( data ){
    //append bar ok
    console.log( data )
  }

  handleError( err: any ){
    //send sms with error
      console.error('error', err)

  }

  getRequest( getData ) {
    getData.request()
        .subscribe( 
           (re) => this.stamp(re),
           (error) => this.handleError(error))
  }
}