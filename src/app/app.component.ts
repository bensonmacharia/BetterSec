import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    pages = [
        {
            title: 'Home',
            url: '/tabs/home',
            icon: 'home'
        },
        {
            title: 'About',
            url: '/tabs/about',
            icon: 'information-circle'
        },
        {
            title: 'FeedBack',
            url: '/tabs/feedback',
            icon: 'logo-twitch'
        },
        {
            title: 'Contact Us',
            url: '/tabs/contact',
            icon: 'contacts'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.pages.map(p => {
                    return p['active'] = (event.url === p.url);
                });
            }
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
