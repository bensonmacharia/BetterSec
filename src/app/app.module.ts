import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';


import {environment} from 'src/environments/environment';
import {AuthenticationService} from './services/authentication.service';
import {AngularFireAuthModule} from '@angular/fire/auth';

import * as firebase from 'firebase';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFirestoreModule} from '@angular/fire/firestore';

firebase.initializeApp(environment.firebase);

@NgModule({
    declarations: [AppComponent, MenuItemComponent],
    entryComponents: [],
    imports: [
        // tslint:disable-next-line:max-line-length
        BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule, ReactiveFormsModule, AngularFirestoreModule.enablePersistence()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthenticationService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
