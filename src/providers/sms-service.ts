
import { Injectable } from '@angular/core';
declare let sms;

@Injectable()
export class SmsService {

//   numberTxt: string = '09152308483';
//   messageTxt: string = 'Server is down!!';

    sendSms( number, message ) {

       // alert("number=" + this.numberTxt + ", message= " + this.messageTxt);

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
     success() { alert('Message sent successfully'); };
       error(e) { alert('Message Failed:' + e); };
    }