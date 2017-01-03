import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HttpService } from '../providers/http';

import { AppComponent } from './app.component';
import { GetDataComponent } from '../components/get-data/get-data'
import { SirenComponent } from '../components/siren/siren'


//pages
import { CmsPage } from '../pages/cms/cms';


const appRoutes: Routes = [

  { path: '', component: CmsPage}

];

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    SirenComponent,
    CmsPage,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( appRoutes )
  ],
  bootstrap: [ AppComponent ],  
  providers: [ HttpService ]
})
export class AppModule {}
