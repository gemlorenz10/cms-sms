# Center Monitoring System with SMS
    CMS mobile with sms alert.This is for Withcenter Inc, internal use.
This project is based on [Aonic Repository](https://github.com/thruthesky/aonic).
* Web Server Monitoring  
-Usage  
--Add this to cms.html  
 ```HTML
<philgo-ping
[label] = "'website.com'"
[graphUrl] = "'http://your.website.com'">
</philgo-ping>  
```  
--Add contact number to siren.ts line 104, under sendText() function. 
```javascript
this.numberTxt = [ 'your number' ];
```
* ~~Server Statistics Monitoring~~
* ~~Internet Monitoring~~

##Platforms Used
    - NodeJS
    - Angular2
    - Ionic-CLI
    - Cordova

##Environment
###Install Packages
    npm Install
    npm install ionic-angular
###Testing
    ionic serve
###Testing on mobile
    ionic platform add android
    ionic run android

##PLUGINS TO ADD

###Cordova SMS Plugin( Added )
[Npm link](https://www.npmjs.com/package/cordova-sms-plugin)
[Github Repository](https://github.com/cordova-sms/cordova-sms-plugin)
###Cordova Ping Plugin
[Npm link](https://www.npmjs.com/package/cordova-plugin-ping)
[Github Repository](https://github.com/t1st3/cordova-plugin-ping)
###Cordova Network info Plugin
[Github Repository](https://github.com/apache/cordova-plugin-network-information)



## TODO

1. Double check - set timeout on http get query : 10s
2. Make a unique address on each request.
3. Add contact number via app. try
[localStorage](http://stackoverflow.com/questions/3357553/how-to-store-an-array-in-localstorage)

```javascript
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));
var storedNames = JSON.parse(localStorage.getItem("names"));
```


##Add feature
*Check connection mode* - Check if the device is connected to any connection.

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