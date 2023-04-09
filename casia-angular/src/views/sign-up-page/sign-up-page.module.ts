import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SignUpPageComponent } from "./sign-up-page.component";

const routes: Route[] = [
    {
        path:'',
        component:SignUpPageComponent,
    }
]

@NgModule({
    declarations:[SignUpPageComponent],
    imports:[CommonModule, RouterModule.forChild(routes)],
    exports:[SignUpPageComponent],
})
export class SignUpPageModule{}