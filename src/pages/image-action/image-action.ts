import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ActionServiceProvider} from '../../providers/action-service/action-service';
declare var window:any;
declare var cordova:any;
/**
 * Generated class for the ImageActionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-action',
  templateUrl: 'image-action.html',
  providers:[ActionServiceProvider]
})
export class ImageActionPage {
  addedToFavourite: any=false;
  image: any;

  constructor(public actionService:ActionServiceProvider,private socialSharing: SocialSharing,private transfer: FileTransfer, private file: File,public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
    this.image = navParams.get('image');
  }
  
  addToFavourite(){
    this.addedToFavourite = !this.addedToFavourite;
    var toastMsg = (this.addedToFavourite) ? 'Image Added to your favourites' : 'Image is removed from your favourites';
    this.actionService.generateToast(toastMsg);
  }
  setAsBackground(fab){
      fab.close();
      this.platform.ready().then(()=>{
        window.plugins.wallpaper.setImage(this.image,(err)=>{
          if(err){
            alert(err);
          } else {
            this.actionService.generateToast('Wallpaper is set Successfully.');
          }
        });
      })
  }
  download(fab){
    fab.close();
    
    this.platform.ready().then(()=>{
        const url = this.image;
      
        this.checkDirectory().then(()=>{
          this.downloadFile();
        }).catch(()=>{
          this.createDirectory().then(()=>{
            this.downloadFile();
          }).catch((err)=>{
            alert("could not create directory "+err);
          })
        })

    })
  }
  checkDirectory(){
    var promise =  new Promise((resolve,reject)=>{
      this.file.checkDir(cordova.file.externalRootDirectory,'Rich_Backgrounds').then(()=>{
        resolve(true);
      }).catch(()=>{
        reject(false);
      })
    });
    return promise;
  }
  createDirectory(){
    var promise = new Promise((resolve,reject)=>{
      this.file.createDir(cordova.file.externalRootDirectory,'Rich_Backgrounds',true).then(()=>{
        resolve(true);        
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
  downloadFile(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    const imagePath = cordova.file.externalRootDirectory  + 'Rich_Backgrounds/';
    var downImage = 'http://affiliate.cubber.in/images/offer_banners/dominos-pizza-the-all-new-dominos.jpg';
    var nameArr = downImage.split('/');
    var imageName = nameArr[nameArr.length-1];
    fileTransfer.download(downImage, imagePath+imageName).then((entry) => {
      
      window.MediaScannerPlugin.scanFile((msg)=>{
        this.actionService.generateToast('Image Downloaded Successfully.');
      },function(err){
        alert("media scan err "+err)
      });
    }, (error) => {
      alert("error while download "+JSON.stringify(error));
    });

  }
  share(fab){
    fab.close();
    this.socialSharing.share('<3 From Rich Backgrounds','','http://affiliate.cubber.in/images/offer_banners/dominos-pizza-the-all-new-dominos.jpg','').then(()=>{
    }).catch(()=>{
      this.actionService.generateToast("Image Couldn't be shared");
    });
  }
}
