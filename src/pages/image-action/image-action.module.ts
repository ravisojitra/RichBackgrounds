import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageActionPage } from './image-action';

@NgModule({
  declarations: [
    ImageActionPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageActionPage),
  ],
  exports:[
    ImageActionPage
  ]
})
export class ImageActionPageModule {}
