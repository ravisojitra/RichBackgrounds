import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ImageActionPage } from "../image-action/image-action";
declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images:any;
  constructor(public navCtrl: NavController,public platform:Platform) {
    this.loadImages();
  }
  loadImages(){
    this.images = [
      "assets/img/background/wishlist-1.jpg",
      "assets/img/background/wishlist-3.jpg",
      "assets/img/background/background-1.jpg",
      "assets/img/background/background-2.jpg",
      "assets/img/background/background-3.jpg",
      "assets/img/background/background-4.jpg",
      "assets/img/background/background-5.jpg",
      "assets/img/background/background-6.jpg",
      "assets/img/profile/profile-1.jpg",
      "assets/img/blog/mountain-range-front.png",
      "assets/img/blog/mountain-range.jpg",
      "assets/img/card/advance-card-bttf.png",
      "assets/img/card/advance-card-jp.jpg",
      "assets/img/card/card-sf.png",
      "assets/img/card/badu-live.png",
      "assets/img/card/card-saopaolo.png",
    ];
  }
  setBackground(image){
    this.platform.ready().then(()=>{
        window.plugins.wallpaper.setImage(image,function(err){
          if(err){
            alert(err);
          } else {
            alert("done");
          }
        });
    })
    
  }
  openImage(image){
    this.navCtrl.push(ImageActionPage,{
      image:image
    })
  }
}
