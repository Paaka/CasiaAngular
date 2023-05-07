import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
    public settingsFormGroup: FormGroup

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.settingsFormGroup = new FormGroup({
            darkMode: new FormControl(this.getLastUsedTheme()),
        })
    }

    private getLastUsedTheme(): boolean {
        const lastUsedTheme = window.localStorage.getItem('darkTheme')
        if (!lastUsedTheme) {
            window.localStorage.setItem('darkTheme', 'true')
            return false
        }

        return !!lastUsedTheme
    }
}
