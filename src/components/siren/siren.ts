import { Component, Input } from '@angular/core';
import { SmsService } from '../../providers/sms-service'

@Component({
  selector: 'siren',
  templateUrl: 'siren.html',
  providers:[SmsService]
})

export class SirenComponent {
    
  @Input() label:String;
  probeCount:number = 5; //DEFAULT DROP COUNT VALUE
  dropLimit:number = 50; //MAX DROP COUNT VALUE

 
  audio = new Audio();
  isPlaying:boolean = false;
  
//Message you will sent and contact

    constructor( private sms: SmsService,  ) {

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
  //  Function that disables sound.
  //
  isMuted:boolean = false;
  OnClickMute(){

      this.isMuted = !this.isMuted;
      if ( this.isMuted == true ) this.audio.pause();   
      if ( this.isMuted == false ) this.audio.play();
  
    }
  //
  //    Function that plays sound and send sms.
  //
  counter = 0;
  soundSiren( err ){
    
    this.counter++
    if ( this.isMuted == false && this.isPlaying == false ) {
        if( this.counter >= this.probeCount ) this.audio.play();
        //console.log('should be playing');
    }  
    if( this.counter >= this.probeCount ) this.sendNow( err, this.counter );
    
        // console.log( 'count :', this.counter );
        // console.log( 'playing? :',  this.isPlaying );

    }
  //
  //    Functions to improve user experience.
  //
    exp = /[\D]/;
    OnChangeValidation( e ) {

        if ( e.target.value.match( this.exp ) ){
            alert('Non-numeric characters not allowed!')
            e.target.value = this.probeCount;
            return false
        }
        if ( e.target.value > this.dropLimit ){
            alert('Max value allowed is '+ this.dropLimit + '!')
            e.target.value = this.dropLimit;
        }
        this.probeCount = e.target.value;

    }
    OnKeyDownValidation( e ){
        if ( e.code == 'Enter' ) e.target.blur(); // PC
        if ( e.key == 'Enter' ) e.target.blur();    //Android 5.1.1
        if ( e.keyCode == 13 || e.keyIdentifier == 'Enter') e.target.blur(); // Android 4.4.2
      // console.log( e )
    }
    showAlertProbeCount:boolean;
    OnFocusValidation( e ){
        if ( e.type == 'focus' ) this.showAlertProbeCount = true;
       // console.log( e );
    }
    OnBlurValidation( e ){
        this.showAlertProbeCount = false;
    }

    //
    //  Function that uses sms service to send sms
    //
    numberTxt;
    messageTxt:string;
    sendText( res, count ){

        this.numberTxt = [ 'your number' ];
        this.messageTxt =  res.server + ' is down!\n' +
                            'Drop Count: ' + count + '\n' +
                            'Status Code: ' +res.status + '\n' +
                            'Message:' + res.message + '\n' +
                            'Check URL: ' + res.url + '\n' +
                            'Sent by: CMS Withcenter, Inc.';

        this.numberTxt.forEach( val => {
              this.sms.sendSms( val, this.messageTxt );            
        });    
        
       // console.log( this.messageTxt );
        this.sms.show.subscribe( data => this.handleSmsEvent( data ) ); //wait for SmsService emit
       // console.log( 'next send in', this.tick );
        this.sendCount++;   
        
        // console.log('Message was sent');                        //
        // console.log('Message sent = ', this.sendCount);            // for testing
        
        this.dontSend = true;

    }
    //
    //  Function that determines when to send sms or call sendText().
    //
    sendCount:number = 0;
    dontSend:boolean = false;
    tick:number = 0; //in seconds
    
    sendNow( res, count ){

        if ( this.dontSend == true ) return;

        if ( this.sendCount == 0 ){ this.tick = 0; }
        else if ( this.sendCount <= 1 ) { this.tick = 1; }// 1min
        // 3rd send will land here. sendCount value will increment after sendText() is done.
        else if ( this.sendCount == 2) { this.tick = 5; }// 5 mins
        else if ( this.sendCount > 2 ) { this.tick = 10; }//10 mins 
            
           
        this.sendText( res, count );
        setTimeout( () => {
            this.dontSend = false   
         }, this.tick * 60000);
    }
    //
    //  Function that displays alert when a message is sent or not.
    //
    messageAlert:boolean;
    messageFailAlert:boolean;
    alertTimeOut = 5000;
    handleSmsEvent( e ){

        this.messageAlert = e.sent;
        setTimeout( ()=>{ this.messageAlert = false }, this.alertTimeOut );

        this.messageFailAlert = e.fail;
        setTimeout( ()=>{ this.messageFailAlert = false }, this.alertTimeOut );
    
    }
    //
    //  Function that resets sendNot when a request is successful.
    //
    success(){

        this.counter = 0; // variable from siren component
        this.sendCount = 0;       // Reset sendNow() when ..
        this.dontSend = false;  //  Successful by resetting these variables

    }

}