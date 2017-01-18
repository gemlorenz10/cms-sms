import { Component, Input } from '@angular/core';
import { SmsService } from '../../providers/sms-service'

//import { SmsService } from '../../providers/sms-service'
@Component({
  selector: 'siren',
  templateUrl: 'siren.html',
  providers:[SmsService]
})
 //declare let media;
export class SirenComponent {
    
  @Input() label:String;
  dropCount:number = 5; //DEFAULT DROP COUNT VALUE
  dropLimit:number = 50; //MAX DROP COUNT VALUE

 
  audio = new Audio();
  isMuted:boolean = false;
  isPlaying:boolean = false;
  fromSms:SmsService;
//Message you will sent and contact
    numberTxt;
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

      this.isMuted = !this.isMuted;
      if ( this.isMuted == true ) this.audio.pause();   
      if ( this.isMuted == false ) this.audio.play();
  
}
  //counter = [];
  counter = 0;
  soundSiren( err ){
        console.log( this.dropCount );
    this.counter++
    if ( this.isMuted == false && this.isPlaying == false ) {
        if( this.counter >= this.dropCount ) this.audio.play();
        console.log('should be playing');
    }  
    if( this.counter >= this.dropCount ) this.sendNow( err, this.counter );
    
 //   console.log( 'count :', this.counter );
   // console.log( 'playing? :',  this.isPlaying );

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



    sendCount:number = 0;
    dontSend:boolean = false;
    tick:number = 1; //in seconds
    messageAlert;
    sendText( res, count ){

        this.numberTxt = ['09152308483'];
        this.messageTxt =  res.server + ' is down!\n' +
                            'Drop Count: ' + count + '\n' +
                            'Status Code: ' +res.status + '\n' +
                            'Message:' + res.message + '\n' +
                            'Check URL: ' + res.url + '\n' +
                            'Sent by: CMS Withcenter, Inc.';

        this.numberTxt.forEach( val => {
              this.sms.sendSms( val, this.messageTxt );            
        });    
        
      //  console.log( 'this is sendText()', this.messageTxt );
        this.sms.show.subscribe( data => this.handleSms( data ) );
         
    }

    sendNow( res, count ){
        
        if ( this.dontSend == true ) return;

        if ( this.sendCount <= 2 ) {
            //this.sendCount++;
            this.tick = 60; // 1min
        }
        else if ( this.sendCount == 3) {
            //this.sendCount++;
            this.tick = 300; // 5 mins
        }
        else if ( this.sendCount > 3 ) {
            //this.sendCount++;
            this.tick = 600; //10 mins
        }

        if( this.dontSend == false ){ 
            this.sendText( res, count );
            this.sendCount++;
            this.dontSend = true;
            setTimeout( () =>  this.dontSend = false , this.tick * 1000);
            // console.log('This is sendnow()', this.tick);
            // console.log('This is sendCount', this.sendCount);     
        }

    }


    handleSms( e ){
        console.log( e )
    }

    success(){

        this.counter = 0; //variable from siren component
        this.sendCount = 0;       // Reset send pattern when ..
        this.dontSend = false;  //  Successful

    }

}