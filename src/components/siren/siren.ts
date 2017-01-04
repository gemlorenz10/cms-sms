import { Component } from '@angular/core';
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


dropCount:number = 5; //DEFAULT DROP COUNT VALUE
dropLimit:number = 100; //MAX DROP COUNT VALUE
audio = new Audio(); //AUDIO/SOUND INSTANCE
isMuted:boolean = false;
isPlaying:boolean = false;
  constructor() {



    // TO MAKE AUDIO PLAY SMOOTH
    this.audio.src = "assets/audio/siren.mp3";
    this.audio.load();
    this.audio.onplay = () => {
      this.isPlaying = true;
     }
    this.audio.onended = () => {
      this.isPlaying = false;
     }
    }

// soundSiren() FUNCTION PRODUCES SOUND WHEN CALLED
OnClickMute(){
  this.isMuted = !this.isMuted
  if ( this.isMuted == true ) this.audio.pause()
  if ( this.isMuted == false ) this.audio.play()
}
//FUNCTION
soundSiren(){
    if ( this.isMuted == false && this.isPlaying == false ) {
      this.audio.play();
    }
}

//SIREN COMPONENT VALIDATION SECTION
  exp = /[\D]/;
  OnChangeValidation(e) {

      if ( e.target.value.match( this.exp ) ){
        alert('Non-numeric characters not allowed!')
        e.target.value = this.dropCount;
        return false
      }
      if ( e.target.value > this.dropLimit ){
         alert('Max value allowed is '+ this.dropLimit + '!')
        e.target.value = this.dropLimit;
      }
  }
}