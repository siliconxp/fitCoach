import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientData } from '../../providers/client-data';
import { ClientDetailPage } from '../client-detail/client-detail';

@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html'
})
export class ClientListPage {
  clientList: any;

  constructor(public navCtrl: NavController, public clientData: ClientData) {
    this.clientList = clientData.clientListShow();
  }

  goToClientDetail(clientId: string): void {
    this.navCtrl.push(ClientDetailPage, { clientId: clientId });
  }

}
