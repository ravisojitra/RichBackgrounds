import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'CategoryPage'
})
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  images: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadCategories();
  }

  loadCategories(){
    this.images = [
      "https://i.imgur.com/iWZTt0A.jpg",
      "https://i.imgur.com/eybzFVU.jpg",
      "https://i.imgur.com/O9VpwmU.jpg",
      "https://i.imgur.com/s1Z8sYI.jpg",
      "https://i.imgur.com/X0PqRAM.jpg",
      "https://i.imgur.com/59ISSsE.jpg",
      "https://i.imgur.com/2HHccsZ.jpg",
      "https://i.imgur.com/szHRvyn.jpg",
      "https://i.imgur.com/hW0211S.jpg",
      "https://i.imgur.com/boUIiH1.jpg",
      "https://i.imgur.com/bBXbjf6.jpg",
      "https://i.imgur.com/d9L5hiA.jpg",
      "https://i.imgur.com/bIqQ4I9.jpg",
      "https://i.imgur.com/oNvpyXA.jpg",
      "https://i.imgur.com/iWZTt0A.jpg"
    ];
  }
}
