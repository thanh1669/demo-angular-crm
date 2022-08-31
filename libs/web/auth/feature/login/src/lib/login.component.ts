import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginStore } from "@app-crm/web/auth/data-access/stores";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginStore],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
    vm$ = this.loginStore.vm$;
    validateForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private loginStore: LoginStore
    ) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            service: ['staff'],
            remember: [true]
        });
    }

    onSubmit(): void {
        this.loginStore.login(
            this.validateForm.value
        );
    }
}