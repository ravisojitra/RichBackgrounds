import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Subject } from 'rxjs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  activePage = new Subject();
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,active:boolean,icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,active: true, icon: 'home' },
      { title: 'Top 100', component: ListPage,active: false, icon: 'map' },
      { title: 'My Favourites', component: 'SideMenuPage', active: false, icon: 'map' },
      { title: 'Rate Us', component: 'SideMenuPage', active: false, icon: 'ionic' },
      { title: 'Share me', component: 'SideMenuPage', active: false, icon: 'ionic' },
      { title: 'Request/Submit Wallpaper', component: 'SideMenuPage', active: false, icon: 'ionic' },
      { title: 'Login', component: 'SideMenuPage', active: false, icon: 'archive' }
    ];

    this.activePage.subscribe((selectedPage :any)=>{
      this.pages.map(page=>{
        page.active = selectedPage.title === page.title;
      })
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }
}
