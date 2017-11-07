import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestsubmitPage } from './requestsubmit';

@NgModule({
  declarations: [
    RequestsubmitPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestsubmitPage),
  ],
  exports:[
    RequestsubmitPage
  ]
})
export class RequestsubmitPageModule {}
