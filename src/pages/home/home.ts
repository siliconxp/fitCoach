import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ClientCreatePage } from '../client-create/client-create';
import { ClientListPage } from '../client-list/client-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  clientCreatePage(): void {
    this.navCtrl.push(ClientCreatePage);
  }

  clientListPage(): void {
    this.navCtrl.push(ClientListPage);
  }

}
