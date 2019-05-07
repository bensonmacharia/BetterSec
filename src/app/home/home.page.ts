import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    userEmail: string;
    constructor(
        private navCtrl: NavController,
        private authService: AuthenticationService
    ) {
    }

    ngOnInit() {

        if (this.authService.userDetails()) {
            this.userEmail = this.authService.userDetails().email;
        } else {
            this.navCtrl.navigateBack('');
        }
    }

    logout() {
        this.authService.logoutUser()
            .then(res => {
                console.log(res);
                this.navCtrl.navigateBack('');
            })
            .catch(error => {
                console.log(error);
            });
    }

}
