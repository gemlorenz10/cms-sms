# Center Monitoring System with SMS
    CMS mobile with sms alert.This is for Withcenter Inc, internal use.
This project is based on [Aonic Repository](https://github.com/thruthesky/aonic).
* Web Server Monitoring 
        ```HTML
        <philgo-ping
        [label] = "'Gem Desktop'"
        [graphUrl] = "'http://your.website.com'">
        ```
</philgo-ping>
* ~~Server Statistics Monitoring~~
* ~~Internet Monitoring~~


## TODO

1. Double check - set timeout on http get query : 10s
2. Make a unique address on each request.


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

##TO-DO / Add feature
*Check connection mode* - Check if the device is connected to any connection.

*Ping IP(ICMP)* - ICMP service for office internet monitoring.

*Server Statistics Monitor* - Monitors server stats ie. CPU, RAM and DISK.



*toast component* - to be more transparent to user.
            Show message if something happens in background.



##Errors encountered on running
###ERROR: 1
        Error occurred during initialization of VM
        Could not reserve enough space for 2097152KB object heap

###Solution
        Go to Start → Control Panel → System → Advanced system settings → advanced(tab) → Environment Variables → System Variables → New:

        Variable name:_JAVA_OPTIONS
        Variable value: -Xmx512M