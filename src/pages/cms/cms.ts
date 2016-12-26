import { Component } from '@angular/core';
import { HttpService } from '../../providers/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/repeat';
/*
  Generated class for the Cms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cms',
  templateUrl: 'cms.html',
  providers: [HttpService]
})
export class CmsPage {
getStamp;
  constructor( private httpService: HttpService ) {
     this.getStamp = httpService.request().subscribe( re => this.stamp(re))
  }

stamp( data ){
  console.log( data )
}


}