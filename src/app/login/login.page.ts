import {MenuController, NavController} from '@ionic/angular';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

    validationsForm: FormGroup;
    errorMessage = '';

    validationMessages = {
        email: [
            {type: 'required', message: 'Email is required.'},
            {type: 'pattern', message: 'Please enter a valid email.'}
        ],
        password: [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password must be at least 5 characters long.'}
        ]
    };

    constructor(
        private menuCtrl: MenuController,
        private navCtrl: NavController,
        private authService: AuthenticationService,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.menuCtrl.enable(false);
        this.validationsForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),
        });
    }

    ngOnDestroy() {
        this.menuCtrl.enable(true);
    }


    loginUser(value) {
        this.authService.loginUser(value)
            .then(res => {
                console.log(res);
                this.errorMessage = '';
                this.navCtrl.navigateForward('/tabs/home');
            }, err => {
                this.errorMessage = err.message;
            });
    }

    goToRegisterPage() {
        this.navCtrl.navigateForward('/register');
    }
}
