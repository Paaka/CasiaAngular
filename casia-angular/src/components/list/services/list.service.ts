import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class ListService{
    public sayHi(){
        console.log('Hi!');
    }
}