# Center Monitoring System with SMS
    CMS mobile with sms alert.This is for Withcenter Inc, internal use.
This project is based on [Aonic Repository](https://github.com/thruthesky/aonic).
* Web Server Monitoring
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

##PLUGINS TO TEST

###Cordova SMS Plugin
[Npm link](https://www.npmjs.com/package/cordova-sms-plugin)
[Github Repository](https://github.com/cordova-sms/cordova-sms-plugin)
###Cordova Ping Plugin
[Npm link](https://www.npmjs.com/package/cordova-plugin-ping)
[Github Repository](https://github.com/t1st3/cordova-plugin-ping)

##TO-DO
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

###ERROR: 2
        file:///android_asset/www/null 
        Failed to load resource: net::ERR_FILE_NOT_FOUND

###Solution
    reinstall android platform
        ionic platform remove android
        ionic platform add android