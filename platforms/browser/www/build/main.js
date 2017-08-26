webpackJsonp([1],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageActionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_action_service_action_service__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ImageActionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImageActionPage = (function () {
    function ImageActionPage(actionService, socialSharing, transfer, file, navCtrl, navParams, platform) {
        this.actionService = actionService;
        this.socialSharing = socialSharing;
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.addedToFavourite = false;
        this.image = navParams.get('image');
    }
    ImageActionPage.prototype.addToFavourite = function () {
        this.addedToFavourite = !this.addedToFavourite;
        var toastMsg = (this.addedToFavourite) ? 'Image Added to your favourites' : 'Image is removed from your favourites';
        this.actionService.generateToast(toastMsg);
    };
    ImageActionPage.prototype.setAsBackground = function (fab) {
        var _this = this;
        fab.close();
        this.platform.ready().then(function () {
            window.plugins.wallpaper.setImage(_this.image, function (err) {
                if (err) {
                    alert(err);
                }
                else {
                    _this.actionService.generateToast('Wallpaper is set Successfully.');
                }
            });
        });
    };
    ImageActionPage.prototype.download = function (fab) {
        var _this = this;
        fab.close();
        this.platform.ready().then(function () {
            var url = _this.image;
            _this.checkDirectory().then(function () {
                _this.downloadFile();
            }).catch(function () {
                _this.createDirectory().then(function () {
                    _this.downloadFile();
                }).catch(function (err) {
                    alert("could not create directory " + err);
                });
            });
        });
    };
    ImageActionPage.prototype.checkDirectory = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.file.checkDir(cordova.file.externalRootDirectory, 'Rich_Backgrounds').then(function () {
                resolve(true);
            }).catch(function () {
                reject(false);
            });
        });
        return promise;
    };
    ImageActionPage.prototype.createDirectory = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.file.createDir(cordova.file.externalRootDirectory, 'Rich_Backgrounds', true).then(function () {
                resolve(true);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ImageActionPage.prototype.downloadFile = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var imagePath = cordova.file.externalRootDirectory + 'Rich_Backgrounds/';
        var downImage = 'http://affiliate.cubber.in/images/offer_banners/dominos-pizza-the-all-new-dominos.jpg';
        var nameArr = downImage.split('/');
        var imageName = nameArr[nameArr.length - 1];
        fileTransfer.download(downImage, imagePath + imageName).then(function (entry) {
            window.MediaScannerPlugin.scanFile(function (msg) {
                _this.actionService.generateToast('Image Downloaded Successfully.');
            }, function (err) {
                alert("media scan err " + err);
            });
        }, function (error) {
            alert("error while download " + JSON.stringify(error));
        });
    };
    ImageActionPage.prototype.share = function (fab) {
        var _this = this;
        fab.close();
        this.socialSharing.share('<3 From Rich Backgrounds', '', 'http://affiliate.cubber.in/images/offer_banners/dominos-pizza-the-all-new-dominos.jpg', '').then(function () {
        }).catch(function () {
            _this.actionService.generateToast("Image Couldn't be shared");
        });
    };
    return ImageActionPage;
}());
ImageActionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-image-action',template:/*ion-inline-start:"D:\ionic\demos\backgrounds\Backg\src\pages\image-action\image-action.html"*/'<!--\n  Generated template for the ImageActionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="opaque">\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button (click)="addToFavourite()" ion-button icon-only>\n        <ion-icon *ngIf="!addedToFavourite" name="ios-heart-outline"></ion-icon>\n        <ion-icon *ngIf="addedToFavourite" name="ios-heart"></ion-icon>\n      </button>\n      <button (click)="share(fab)" ion-button icon-only>\n          <ion-icon name="md-share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen>\n  <img src="{{image}}" width="100%" height="100%">\n  <ion-fab bottom right #fab>\n    <button ion-fab class="mainFAB">\n        <ion-icon name="md-add"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n        <button ion-fab (click)="setAsBackground(fab)">\n            <ion-icon name="md-checkmark"></ion-icon>\n        </button>\n      <button ion-fab (click)="download(fab)">\n          <ion-icon name="md-download"></ion-icon>\n      </button>\n      <button ion-fab (click)="share(fab)">\n          <ion-icon name="md-share-alt"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\demos\backgrounds\Backg\src\pages\image-action\image-action.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_action_service_action_service__["a" /* ActionServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_action_service_action_service__["a" /* ActionServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], ImageActionPage);

//# sourceMappingURL=image-action.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/image-action/image-action.module": [
		571,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ActionServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ActionServiceProvider = (function () {
    function ActionServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ActionServiceProvider.prototype.generateToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    return ActionServiceProvider;
}());
ActionServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ActionServiceProvider);

//# sourceMappingURL=action-service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_action_image_action__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.loadImages();
    }
    HomePage.prototype.loadImages = function () {
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
    };
    HomePage.prototype.setBackground = function (image) {
        this.platform.ready().then(function () {
            window.plugins.wallpaper.setImage(image, function (err) {
                if (err) {
                    alert(err);
                }
                else {
                    alert("done");
                }
            });
        });
    };
    HomePage.prototype.openImage = function (image) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__image_action_image_action__["a" /* ImageActionPage */], {
            image: image
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\ionic\demos\backgrounds\Backg\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="mtc">\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title class="tc theme-text">Wallpapers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row wrap>\n      <ion-col class="minW50" *ngFor="let image of images">\n        <img [src]="image" (click)="openImage(image)" class="gridImage">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\demos\backgrounds\Backg\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\ionic\demos\backgrounds\Backg\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\demos\backgrounds\Backg\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_image_action_image_action__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_action_service_action_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_image_action_image_action__["a" /* ImageActionPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/image-action/image-action.module#ImageActionPageModule', name: 'ImageActionPage', segment: 'image-action', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_image_action_image_action__["a" /* ImageActionPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_action_service_action_service__["a" /* ActionServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.activePage = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], active: true, icon: 'home' },
            { title: 'Top 100', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], active: false, icon: 'map' },
            { title: 'My Favourites', component: 'SideMenuPage', active: false, icon: 'map' },
            { title: 'Rate Us', component: 'SideMenuPage', active: false, icon: 'ionic' },
            { title: 'Share me', component: 'SideMenuPage', active: false, icon: 'ionic' },
            { title: 'Request/Submit Wallpaper', component: 'SideMenuPage', active: false, icon: 'ionic' },
            { title: 'Login', component: 'SideMenuPage', active: false, icon: 'archive' }
        ];
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = selectedPage.title === page.title;
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionic\demos\backgrounds\Backg\src\app\app.html"*/'<ion-menu [content]="content" id="menu-dark">\n  <ion-header class="sidemenuHeader">\n    <ion-toolbar>\n      <ion-item no-lines>\n        <ion-avatar item-left>\n          <img class="user-avatar round" src="assets/img/avatar/girl-avatar.png" onerror="this.src=\'assets/img/avatar/girl-avatar.png\'"\n          />\n        </ion-avatar>\n        <h2>Hello,Guest</h2>\n        <p>Welcome to Backgrounds!</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content class="menu">\n    <ion-list>\n      <button [class.highlight]="p.active" menuClose="left" ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>  {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionic\demos\backgrounds\Backg\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map