import { Component } from '@angular/core';
import { HttpService } from '../../providers/http';
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
head;
  constructor( private httpService: HttpService ) {
   this.head  = httpService.stamp;
   console.log( this.head );
    
  }

}