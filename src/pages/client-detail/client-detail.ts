import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClientData } from '../../providers/client-data';

@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html'
})
export class ClientDetailPage {
  client: any;
  clientWeightTrack: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public clientData: ClientData) {}

  ionViewDidEnter() {
    this.client = this.clientData.clientDetailShow(this.navParams.get('clientId'));
    this.clientWeightTrack = this.clientData.clientWeightHistoryCoach(this.navParams.get('clientId'));
  }

}