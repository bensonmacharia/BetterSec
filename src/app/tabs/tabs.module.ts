import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {ContactPageModule} from '../contact/contact.module';
import {AboutPageModule} from '../about/about.module';
import {HomePageModule} from '../home/home.module';
import {FeedbackPageModule} from '../feedback/feedback.module';
import {MessagingPageModule} from '../messaging/messaging.module';
import {NotificationsPageModule} from '../notifications/notifications.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        HomePageModule,
        AboutPageModule,
        ContactPageModule,
        FeedbackPageModule,
        MessagingPageModule,
        NotificationsPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
