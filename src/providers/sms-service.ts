
import { Injectable } from '@angular/core';
declare let sms;

@Injectable()
export class SmsService {

    sendSms( number, message ) {
        if ( typeof sms == 'undefined' ) return console.error('sms is undefined. did you install sms plugin? or running in web browser?');
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                // intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

       return sms.send(number, message, options,
          () => { this.success(); },
          (e) => { this.error(e); } );
    }
     success() { console.log('Message sent successfully'); };
       error(e) { console.log('Message not sent!'); };
    }