# Center Monitoring System with SMS
    CMS mobile with sms alert.For Withcenter Inc, internal use.
This project is based on [Aonic Repository](https://github.com/thruthesky/aonic).
* Philgo Website Monitoring  
-Usage  
--Add this to cms.html  
 ```HTML
<philgo-ping
[label] = "'website.com'"
[graphUrl] = "'http://your.website.com'">
</philgo-ping>  
```  
--Add contact number to siren.ts line 104, under sendText() function. 
----Needs proper handling with multiple number. I just focused first in 1.
```javascript
//this.numberTxt = [ 'admin number' ];
this.numberTxt = 'admin number';
```
* ~~Server Statistics Monitoring~~
* ~~Internet Monitoring~~

##Programs Used
    - NodeJS
    - Angular2
    - Ionic-CLI
    - Cordova
##Platform
    - Android
##Environment
###Install Packages
    npm Install
    npm install ionic-angular
###Testing
    ionic serve
###Testing on mobile
    ionic platform add android
    ionic run android

## TODO

1. ~~Double check - set timeout on http get query : 10s~~
2. ~~Make a unique address on each request.~~
3. Add contact number via app. try
[localStorage](http://stackoverflow.com/questions/3357553/how-to-store-an-array-in-localstorage)

```javascript
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));
var storedNames = JSON.parse(localStorage.getItem("names"));
```


##Add feature
*Check connection mode* - Check if the device is connected to any connection. Done.(Limited to first hop)

*Ping IP(ICMP)* - ICMP service for office internet monitoring.

*Server Statistics Monitor* - Monitors server stats ie. CPU, RAM and DISK.





##Errors encountered on running
###ERROR: 1
        Error occurred during initialization of VM
        Could not reserve enough space for 2097152KB object heap

###Solution
        Go to Start → Control Panel → System → Advanced system settings → advanced(tab) → Environment Variables → System Variables → New:

        Variable name:_JAVA_OPTIONS
        Variable value: -Xmx512M
        
###Sample Output ( SMS sending pattern check )

      4siren.ts:119 sendText. Next in:  1 Minute 36  <-- Minute mark
      4siren.ts:119 sendText. Next in:  1 Minute 37
      4siren.ts:119 sendText. Next in:  5 Minute 38
      4siren.ts:119 sendText. Next in:  10 Minute 43
      4siren.ts:119 sendText. Next in:  20 Minute 53
      4siren.ts:119 sendText. Next in:  20 Minute 13
      4siren.ts:119 sendText. Next in:  20 Minute 33
