import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PhilgoApi } from '../providers/philgo-api';
import { SmsService } from '../providers/sms-service'
import { AppComponent } from './app.component';
import { PhilgoPingComponent } from '../components/philgo-ping/philgo-ping'
import { SirenComponent } from '../components/siren/siren'

//pages
import { CmsPage } from '../pages/cms/cms';

const appRoutes: Routes = [

  { path: '', component: CmsPage}
  

];

@NgModule({
  declarations: [
    AppComponent,
    PhilgoPingComponent,
    SirenComponent,
    CmsPage
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  bootstrap: [ AppComponent ],  
  providers: [ PhilgoApi, SmsService ] //SmsService should be here
})
export class AppModule {}
