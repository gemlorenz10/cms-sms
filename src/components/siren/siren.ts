import { Component } from '@angular/core';

@Component({
  selector: 'siren',
  templateUrl: 'siren.html',
})
export class SirenComponent {


dropCount:number = 5; //DEFAULT DROP COUNT VALUE
dropLimit:number = 5; //MAX DROP COUNT VALUE
counter = [];
audio = new Audio();
isMuted:boolean = false;
isPlaying:boolean = false;
  
  constructor() {



    // MAKE SOUND PLAY SMOOTH
    this.audio.src = "assets/audio/siren.mp3";
    this.audio.load();
    this.audio.onplay = () => {
      this.isPlaying = true;
     }
    this.audio.onended = () => {
      this.isPlaying = false;
     }
  }

OnClickMute(){
  this.isMuted = !this.isMuted
  if ( this.isMuted == true ) this.audio.pause()
  if ( this.isMuted == false ) this.audio.play()
}

soundSiren(){
    if ( this.isMuted == false && this.isPlaying == false ) {
      this.counter.push('1');
        if( this.counter.length >= this.dropCount ) this.audio.play();
        if( this.counter.length > this.dropLimit + 5 ) this.counter.shift();  //PREVENT ARRAY FROM GETTING TOO BIG
        console.log( this.counter.length )
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
      this.dropCount = e.target.value; 
  }


}