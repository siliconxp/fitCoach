import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientListPage } from './client-list';

@NgModule({
  declarations: [
    ClientListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientListPage),
  ],
  exports: [
    ClientListPage
  ]
})
export class ClientListPageModule {}
