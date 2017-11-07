import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/storage/storage";
import {Observable} from 'Rxjs/rx';
@IonicPage({
  name:'FavouritesPage'
})
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers:[StorageProvider]
})
export class FavouritesPage {
  images: any = [];

  constructor(public zone:NgZone,public storageProvider:StorageProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.loadFavourites();
    Observable.interval(2000).subscribe(()=>{
      this.openImage("sdf");
    });
  }

  loadFavourites(){
    
    this.storageProvider.getFavourites().then((data)=>{
      for(var i = 0; i < data['rows'].length; i++) {
        this.zone.run(()=>{
          this.images.push(data['rows'].item(i).url);
        })
      }
    });
  }

  openImage(image){
    this.navCtrl.push('ImageActionPage',{
      image:image
    })
  }
}
