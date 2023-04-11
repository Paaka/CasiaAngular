import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { SignUpPageComponent } from "./sign-up-page.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { LoginButtonModule } from '../../components/login-button/login-button.module';

const routes: Route[] = [
    {
        path:'',
        component:SignUpPageComponent,
    }
]

@NgModule({
    declarations:[SignUpPageComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        LoginButtonModule,
    ],
    exports:[SignUpPageComponent],
})
export class SignUpPageModule{}