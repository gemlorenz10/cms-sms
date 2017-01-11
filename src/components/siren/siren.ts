import { Component, Input } from '@angular/core';
import { SmsService } from '../../providers/sms-service'

//import { SmsService } from '../../providers/sms-service'

@Component({
  selector: 'siren',
  templateUrl: 'siren.html',
  providers:[SmsService]
})
export class SirenComponent {
@Input() label:String;
  dropCount:number = 5; //DEFAULT DROP COUNT VALUE
  dropLimit:number = 5; //MAX DROP COUNT VALUE
  counter = [];
  audio = new Audio();
  isMuted:boolean = false;
  isPlaying:boolean = false;

//Message you will sent and contact
    numberTxt:string;
    messageTxt:string;

    constructor( private sms: SmsService,  ) {

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
    if ( this.isMuted == true ) this.audio.pause();
    if ( this.isMuted == false ) this.audio.play();
  }

  soundSiren( websiteName ){
      if ( this.isMuted == false && this.isPlaying == false ) {
        this.counter.push('1');
          if( this.counter.length >= this.dropCount ) this.audio.play();
          if( this.counter.length > this.dropLimit + 5 ) this.counter.shift();  //LIMIT THE LENGHT OF ARRAY
          this.sendText( this.label );
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

    sendText( websiteName ){
         this.numberTxt = '09152308483';
         this.messageTxt =  websiteName + ' is down!';
        this.sms.sendSms( this.numberTxt, this.messageTxt );
       // alert( this.messageTxt + this.numberTxt )
    }
}