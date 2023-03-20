import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsModule } from '../views/views.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  {
    path: '**',
    redirectTo: '/boards', 
    pathMatch:'full',
  },
  {
    path:'',
    loadChildren:()=> import('../views/views.module').then(m => m.ViewsModule),
  }, 

];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ViewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
