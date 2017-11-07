import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ActionServiceProvider} from '../../providers/action-service/action-service';
import { StorageProvider } from "../../providers/storage/storage";
declare var window:any;
declare var cordova:any;
/**
 * Generated class for the ImageActionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: "ImageActionPage"
})
@Component({
  selector: "page-image-action",
  templateUrl: "image-action.html",
  providers: [ActionServiceProvider, StorageProvider]
})
export class ImageActionPage {
  img: any;
  addedToFavourite: any = false;
  image: any;

  constructor(
    public storageProvider: StorageProvider,
    public actionService: ActionServiceProvider,
    private socialSharing: SocialSharing,
    private transfer: FileTransfer,
    private file: File,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {
    this.img = navParams.get("image");
    this.checkIfImageIsFavourite();
    this.image = this.img;
  }

  checkIfImageIsFavourite(){
    this.storageProvider.checkIfImageIsFavourite(this.img).then((data)=>{
      // alert(JSON.stringify(data['rows']));
      if(data['rows'].length == 1){
        // alert("is favourite");
        this.addedToFavourite = true;
      } else {
        // alert("is not favourite");
        this.addedToFavourite = false;
      }
    }).catch((err)=>{
      // alert("error while checking if img is fv => "+JSON.stringify(err));
    })
  }

  addToFavourite() {
    this.addedToFavourite = !this.addedToFavourite;
    if (this.addedToFavourite) {
      this.storageProvider.addItem(this.image);
    } else {
      this.storageProvider
        .removeFavourite(this.image)
        .then(data => {
          // alert("Item removed");
        })
        .catch(err => {
          // alert("Item not removed " + JSON.stringify(err));
        });
    }
    this.storageProvider.checkIfImageIsFavourite(this.image);
    var toastMsg = this.addedToFavourite
      ? "Image Added to your favourites"
      : "Image is removed from your favourites";
    this.actionService.generateToast(toastMsg);
  }
  setAsBackground(fab) {
    fab.close();
    this.platform.ready().then(() => {
      window.plugins.wallpaper.setImageHttp(this.image, err => {
        if (err) {
          alert(err);
        } else {
          this.actionService.generateToast("Wallpaper is set Successfully.");
        }
      });
    });
  }
  download(fab) {
    fab.close();

    this.platform.ready().then(() => {
      const url = this.image;

      this.checkDirectory()
        .then(() => {
          this.downloadFile();
        })
        .catch(() => {
          this.createDirectory()
            .then(() => {
              this.downloadFile();
            })
            .catch(err => {
              alert("could not create directory " + err);
            });
        });
    });
  }
  checkDirectory() {
    var promise = new Promise((resolve, reject) => {
      this.file
        .checkDir(cordova.file.externalRootDirectory, "Rich_Backgrounds")
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject(false);
        });
    });
    return promise;
  }
  createDirectory() {
    var promise = new Promise((resolve, reject) => {
      this.file
        .createDir(cordova.file.externalRootDirectory, "Rich_Backgrounds", true)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    });
    return promise;
  }
  downloadFile() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const imagePath = cordova.file.externalRootDirectory + "Rich_Backgrounds/";
    var downImage = this.image;
    var nameArr = downImage.split("/");
    var imageName = nameArr[nameArr.length - 1];
    fileTransfer.download(downImage, imagePath + imageName).then(
      entry => {
        window.MediaScannerPlugin.scanFile(
          msg => {
            this.actionService.generateToast("Image Downloaded Successfully.");
          },
          function(err) {
            alert("media scan err " + err);
          }
        );
      },
      error => {
        alert("error while download " + JSON.stringify(error));
      }
    );
  }
  share(fab) {
    fab.close();
    this.socialSharing
      .share("<3 From Rich Backgrounds", "", this.image, "")
      .then(() => {})
      .catch(() => {
        this.actionService.generateToast("Image Couldn't be shared");
      });
  }
}
