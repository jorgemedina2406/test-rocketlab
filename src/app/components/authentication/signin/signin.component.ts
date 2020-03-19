import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    onSubmit() {

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        const email = this.loginForm.value.email;
        const pass  = this.loginForm.value.password;

        this.authService.signIn(email, pass);


    }
}
