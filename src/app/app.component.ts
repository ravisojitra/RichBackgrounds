import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Subject } from "rxjs";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { StorageProvider } from "../providers/storage/storage";

// import { HomePage } from '../pages/home/home';
// import {TopPage} from '../pages/top/top';
// import { FavouritesPage } from "../pages/favourites/favourites";
// import { SharemePage } from "../pages/shareme/shareme";
// import { RequestsubmitPage } from "../pages/requestsubmit/requestsubmit";
// import { CategoryPage } from "../pages/category/category";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  activePage = new Subject();
  rootPage: any = "HomePage";

  pages: Array<{ title: string; component: any; active: boolean; icon: any }>;

  constructor(
    private androidPermissions: AndroidPermissions,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storageProvider:StorageProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { 
        title: "Home", 
        component: "HomePage", 
        active: true, 
        icon: "md-home" 
      },
      { 
        title: "Top 100", 
        component: "TopPage", 
        active: false, 
        icon: "md-clock" 
      },
      {
        title: "My Favourites",
        component: "FavouritesPage",
        active: false,
        icon: "md-heart"
      },
      
      {
        title: "Categories",
        component: "CategoryPage",
        active: false,
        icon: "ios-folder-open"
      }
      // {
      //   title: "Share me",
      //   component: "SharemePage",
      //   active: false,
      //   icon: "md-share"
      // },
      // {
      //   title: "Request/Submit Wallpaper",
      //   component: "RequestsubmitPage",
      //   active: false,
      //   icon: "md-cloud-upload"
      // }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = selectedPage.title === page.title;
      });
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.androidPermissions
        .requestPermission(
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        )
        .then(data => {
          console.log("You are good to go");
        })
        .catch(err => {
          console.log(JSON.stringify(err));
        });
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#19152c");
      this.splashScreen.hide();
      setTimeout(()=>{
        this.storageProvider.createTable();
      },500)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }
}
