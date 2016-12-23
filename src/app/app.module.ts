import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HttpService } from '../providers/http';

import { AppComponent } from './app.component';
import { CmsPage } from '../pages/cms/cms';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';

const appRoutes: Routes = [
  { path: 'help', component: HelpPage},
  { path: 'cms', component: CmsPage},
  { path: '', component: HomePage }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HelpPage,
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


