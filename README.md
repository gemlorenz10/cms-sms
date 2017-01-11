# Center Monitoring System with SMS
    CMS mobile with sms alert.This is for Withcenter Inc, internal use.
* Web Server Monitoring
* ~~Server Statistics Monitoring~~
* ~~Internet Monitoring~~

This project is based from [Aonic Repository](https://github.com/thruthesky/aonic).

##Platforms Used
    - NodeJS
    - Angular2
    - Ionic-CLI
    - Cordova

##Running
###Install Packages
    npm Install
###Testing
    ionic serve
###Testing on mobile
    ionic platform add android
    ionic run android

##TO ADD
Fail Count

##PLUGINS TO TEST

###Cordova SMS Plugin
[Npm link](https://www.npmjs.com/package/cordova-sms-plugin)
[Github Repository](https://github.com/cordova-sms/cordova-sms-plugin)
###Cordova Ping Plugin
[Npm link](https://www.npmjs.com/package/cordova-plugin-ping)
[Github Repository](https://github.com/t1st3/cordova-plugin-ping)


##ERROS on Running
        Error occurred during initialization of VM
        Could not reserve enough space for 2097152KB object heap

###SOlution
        Go to Start → Control Panel → System → Advanced system settings → advanced(tab) → Environment Variables → System Variables → New:

        Variable name:_JAVA_OPTIONS
        Variable value: -Xmx512M