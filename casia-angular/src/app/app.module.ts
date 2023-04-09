import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsModule } from '../views/views.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path:'',
    loadChildren:()=> import('../views/views.module').then(m => m.ViewsModule),
  }, 
  {
    path:'login',
    loadChildren:()=> import('../views/sign-up-page/sign-up-page.module').then(m => m.SignUpPageModule),
    pathMatch:'full',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ViewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
