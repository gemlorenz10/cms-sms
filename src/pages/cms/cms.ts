import { Component } from '@angular/core';
//providers
//Components
import { GetDataComponent } from '../../components/get-data/get-data'



/*
  Generated class for the Cms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cms',
  templateUrl: 'cms.html',
  providers: [GetDataComponent]
})
export class CmsPage {

constructor( getData: GetDataComponent ){

}
}