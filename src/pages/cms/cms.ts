import { Component } from '@angular/core';
//providers
//Components

declare let sms;

/*
  Generated class for the Cms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cms',
  templateUrl: 'cms.html',
})



export class CmsPage {
  pageTitle ="Center Monitoring System"
  numberTxt: string = null;
  messageTxt: string = null;
  constructor() {
  }

  sendSms() {

        alert("number=" + this.numberTxt + ", message= " + this.messageTxt);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                // intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        sms.send(this.numberTxt, this.messageTxt, options,
          () => { this.success(); },
          (e) => { this.error(e); } );
    }
    
    success() { alert('Message sent successfully'); };
    error(e) { alert('Message Failed:' + e); };


}