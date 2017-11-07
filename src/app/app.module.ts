import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import {FavouritesPage} from '../pages/favourites/favourites';
// import {RequestsubmitPage} from '../pages/requestsubmit/requestsubmit';
// import {SharemePage} from '../pages/shareme/shareme';
// import {TopPage} from '../pages/top/top';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { ImageActionPage } from "../pages/image-action/image-action";
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionServiceProvider } from '../providers/action-service/action-service';
import { HttpModule } from '@angular/http';
import { StorageProvider } from '../providers/storage/storage';
import { SQLite } from '@ionic-native/sqlite';
@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // ImageActionPage,
    // ListPage,
    // FavouritesPage,
    // RequestsubmitPage,
    // SharemePage,
    // TopPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // ImageActionPage,
    // ListPage,
    // FavouritesPage,
    // RequestsubmitPage,
    // SharemePage,
    // TopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    SocialSharing,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActionServiceProvider,
    StorageProvider,
    SQLite
  ]
})
export class AppModule {}
