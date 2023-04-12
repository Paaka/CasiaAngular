import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'',
    templateUrl:'./sign-in-page.component.html',
    styleUrls:['./sign-in-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInPageComponent implements OnInit {
    public form: FormGroup;

    constructor(private fb: FormBuilder){}

    ngOnInit(): void{
        this.form = this.fb.group({
            email: new FormControl('', [Validators.email, Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    public onButtonClickedHandler(): void {
        console.log(this.form.value)
    }
}