import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharemePage } from './shareme';

@NgModule({
  declarations: [
    SharemePage,
  ],
  imports: [
    IonicPageModule.forChild(SharemePage),
  ],
  exports:[
    SharemePage
  ]
})
export class SharemePageModule {}
