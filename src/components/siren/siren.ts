import { Component } from '@angular/core';
//import { Control } from '@angular/common';
/*
  Generated class for the Siren component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'siren',
  templateUrl: 'siren.html',
})
export class SirenComponent {


dropCount:any = 5;
//for drop count validation
exp = /[\D]/;
numLimit = 99;
isNotAllowed = false;
  constructor() {
    console.log('Hello Siren Component');
    }





//SIREN COMPONENT BEHAVIOR SECTION
//for drop count input validation
  OnChangeValidation(e) {

      if ( e.target.value.match( this.exp ) ){
        alert('Non-numeric characters not allowed!')
        e.target.value = this.dropCount;
        return false
      }
      if ( e.target.value > this.numLimit ){
         alert('Max value allowed is '+ this.numLimit + '!')
        e.target.value = this.numLimit;
      }
  console.log(e)
  }



}