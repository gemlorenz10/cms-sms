import { Component, Input, ViewChild } from '@angular/core';
//Services
import { PhilgoApi } from '../../providers/philgo-api';
//Components
import { CmsPage } from '../../pages/cms/cms'
import { SirenComponent } from '../siren/siren';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'philgo-ping',
  templateUrl: 'philgo-ping.html',
  providers:[SirenComponent, CmsPage]
})
export class PhilgoPingComponent {
//config
timeOut:number = 10000;  //request timeout and setTimeout in pingloop()
barLength:number = 290; // lenght of the bar: 285 max

@Input() graphUrl:String;
@Input() label:String;
@ViewChild('sound') siren:SirenComponent;


barColor;
responseData = [];
isFaulty:boolean;

runPing:boolean;
 constructor( private philgo: PhilgoApi, 
              private sirenComponent: SirenComponent, 
              private checkConnect: CmsPage){}

  ngOnInit(){
    let status;
    status = navigator.onLine
    //console.log( status )
    this.runPing = status;


    setTimeout( () => this.pingLoop(), 100);
  }
  // ngOnDestroy(){
  //     this.runPing = false;
  // }

  //
  //  Function that waits for PhilgoApi service
  //

  subscription;
  pingLoop() { 
        this.checkConnect.isConnected
                          .subscribe( data => this.runPing = data.connection );
        //console.log( this.runPing )
        if( this.runPing == false ){}
        else{
        let url = this.graphUrl + '&dummy=' + (new Date).getTime();
        //let url = this.graphUrl;
        this.subscription = this.philgo
                                    .ping( url, this.timeOut )  // url will be passed into http service function
                                    .subscribe( 
                                        ( re ) => this.handleSuccess( re ),      //get the data
                                        ( error ) => this.handleError( error )); //get http status code
            }
        setTimeout( () => this.pingLoop(), this.timeOut );  
    }
  //
  //  Function if url succeed
  //
  succesCount = 0;
  handleSuccess( data ){
        
        this.succesCount++
        let success = {
          stamp : data.stamp,
          status : '200'    // static value for status code when success.
        }
        this.handleResponse( success );
        if( this.succesCount == this.siren.probeCount ){ 
              this.siren.success(); 
              this.isFaulty = false;  // displays red border to indicate the server is still considered faulty
        }                             //only considered good when successCount meets probeCount
        // console.log( 'this is probe count', this.siren.probeCount );
    
  }
  //
  //  Function if url fail
  //
  handleError( err ){
       // console.log( err )
        this.succesCount = 0; // reset successCount when there is an error.
        let error = {}
        if ( err.status == 0 || err.status == undefined || err.status == null ){
          error = { server : this.label,
                    url: 'No URL found in response body',
                    message :
                    `REQUEST TIME-OUT!!Check the server to know the problem.`,
                    status : '0' };
        } else {
          error = { server : this.label,
                    url: err.url,
                    message : err.statusText,
                    status : err.status };
        }
        this.siren.soundSiren( error ); // function from child compoment SirenComponent
        this.handleResponse( error );   // append red bar
        if( this.siren.counter >= this.siren.probeCount ) this.isFaulty = true; 
       // console.log( this.siren.counter, this.siren.probeCount )

  }
  //
  //  Handles the response wether success or fail.
  //  Responsible for graph.
  //
  handleResponse( data ){

        this.responseData.push( data );
        //limit bar lenght to fit to 
        if ( this.barLength > 286 ) this.barLength = 286;
        if ( this.responseData.length == this.barLength + 1 ){
            this.responseData.shift();
        }
       // console.log(this.responseData);
  } 





}