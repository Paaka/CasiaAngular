import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MatDrawer } from '@angular/material/sidenav'

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
    @ViewChild('drawer') public elRef: any

    public isDrawerOpen: boolean = false

    constructor() {}

    ngOnInit(): void {}

    public onButtonClickedHandler(): void {
        this.elRef.toggle()
        this.isDrawerOpen = !this.isDrawerOpen
        console.log(this.isDrawerOpen)
    }
}
