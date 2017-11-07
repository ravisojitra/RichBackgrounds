import { Component } from '@angular/core';
import { NavController, Platform, IonicPage } from 'ionic-angular';
import { ImageActionPage } from "../image-action/image-action";
declare var window: any;

@IonicPage({
  name:'HomePage'
})
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
    this.navCtrl.push('ImageActionPage',{
      image:image
    })
  }
}
