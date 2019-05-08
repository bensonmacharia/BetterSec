import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    userEmail: string;
    userId: string;

    constructor(
        private navCtrl: NavController,
        private authService: AuthenticationService
    ) {
    }

    ngOnInit() {

        console.log(this.authService.userDetails());

        // if (this.authService.userDetails()) {
        //     this.userEmail = this.authService.userDetails().email;
        //     this.userId = this.authService.userDetails().uid;
        // } else {
        //     this.navCtrl.navigateBack('/login');
        // }
    }

    logout() {
        this.authService.logoutUser()
            .then(res => {
                console.log(res);
                this.navCtrl.navigateBack('/login');
            })
            .catch(error => {
                console.log(error);
            });
    }

}
