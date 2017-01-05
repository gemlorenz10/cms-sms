import { Injectable } from '@angular/core';
import { SMS } from 'ionic-native'

@Injectable()
export class SmsService {

number='';
message='';

   constructor(  ) {
     SMS.send( this.number, this.message );
    }

}
