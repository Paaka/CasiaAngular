import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'',
    templateUrl:'./sign-up-page.component.html',
    styleUrls:['./sign-up-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPageComponent implements OnInit {
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