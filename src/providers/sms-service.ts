/// <reference path="../declarations.d.ts"/>
import { Injectable } from '@angular/core';


@Injectable()
export class SmsService {

number;
message;
sms;
   constructor(  sms : sms ) {
       this.sms = sms;
 }

    sendSms( number, message ){
        this.sms.send( number, message );
    }
}