import {MenuController} from '@ionic/angular';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

    validationsForms: FormGroup;
    errorMessage = '';

    constructor(
        private menuCtrl: MenuController,
        private navCtrl: NavController,
        private authService: AuthenticationService,
        private formBuilder: FormBuilder
    ) {
    }

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

    ngOnInit() {
        this.menuCtrl.enable(false);
        this.validationsForms = this.formBuilder.group({
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
                this.navCtrl.navigateForward('/dashboard');
            }, err => {
                this.errorMessage = err.message;
            });
    }

    goToRegisterPage() {
        this.navCtrl.navigateForward('/register');
    }
}
