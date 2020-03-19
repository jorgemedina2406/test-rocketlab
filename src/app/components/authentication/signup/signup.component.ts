import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public authService: AuthService,
        private snackBar: MatSnackBar
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

        this.authService.signUp(email, pass).then( () => {
            this.snackBar.open('Usuario creado exitosamente', 'Cerrar', {
                duration: 2000,
              });
        }).catch();


    }
}
