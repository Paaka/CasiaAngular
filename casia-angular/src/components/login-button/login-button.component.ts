import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector:'app-login-button',
    templateUrl:'./login-button.component.html',
    styleUrls:['./login-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonComponent{

    @Input() public iconSrc = 'assets/gmail.svg'

    public onClickHandler(): void{
        console.log('Hello');
    }
}