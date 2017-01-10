import { Component } from '@angular/core';

import { SmsService } from '../../providers/sms-service'

@Component({
  selector: 'siren',
  templateUrl: 'siren.html',
  providers:[SmsService]
})
export class SirenComponent {

  dropCount:number = 5; //DEFAULT DROP COUNT VALUE
  dropLimit:number = 5; //MAX DROP COUNT VALUE
  counter = [];
  audio = new Audio();
  isMuted:boolean = false;
  isPlaying:boolean = false;

  sms;//--------------------------------------------------SMS TESTING
  message = 'Hi Pogi'//------------------------------------SMS TESTING
  number = '09214531886';//--------------------------------SMS TESTING

    constructor( sms: SmsService ) {
      this.sms = sms;  //---------------------------------------SMS TESTING

      // MAKE SOUND PLAY SMOOTH
      this.audio.src = "assets/audio/siren.mp3";
      this.audio.load();
      // can't play sound
      this.audio.onplay = () => {
        this.isPlaying = true;
      }
      // can play sound
      this.audio.onended = () => {
        this.isPlaying = false; 
      }
    }

  // 
  //           FUNCTIONS
  //
  OnClickMute(){
    this.isMuted = !this.isMuted
    if ( this.isMuted == true ) this.audio.pause()
    if ( this.isMuted == false ) this.audio.play()
    
    this.sms.sendSms( this.number, this.message )//-------------SMS TESTING
  }

  soundSiren(){
      if ( this.isMuted == false && this.isPlaying == false ) {
        this.counter.push('1');
          if( this.counter.length >= this.dropCount ) this.audio.play();
          if( this.counter.length > this.dropLimit + 5 ) this.counter.shift();  //LIMIT THE LENGHT OF ARRAY
          console.log( this.counter.length )
      }
  }
  //
  //SIREN COMPONENT VALIDATION SECTION
  //
  exp = /[\D]/;
    OnChangeValidation( e ) {

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