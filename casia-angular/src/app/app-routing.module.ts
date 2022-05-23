import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from 'src/views/main-page/main-page.component';


const routes: Routes = [ {
  path: '',
  redirectTo: '/boards', 
  pathMatch:'full',
},
{
  path:'',
  component:MainPageComponent,
  
},   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
