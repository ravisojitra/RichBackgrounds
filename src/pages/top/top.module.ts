import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopPage } from './top';

@NgModule({
  declarations: [
    TopPage,
  ],
  imports: [
    IonicPageModule.forChild(TopPage),
  ],
  exports:[
    TopPage
  ]
})
export class TopPageModule {}
