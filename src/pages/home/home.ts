import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientCreatePage } from '../client-create/client-create';
import { ClientListPage } from '../client-list/client-list';
import { AuthData } from '../../providers/auth-data';
import { ClientData } from '../../providers/client-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAdmin: boolean = false;
  weightTrackForm: any;
  weightHistory: any;

  constructor(public navCtrl: NavController, public authData: AuthData, 
    public formBuilder: FormBuilder, public clientData: ClientData) {
    
    authData.isAsdmin().then( adminStatus => {
      this.isAdmin = adminStatus;
    });

    this.weightTrackForm = formBuilder.group({ weight: [ Validators.required ] });

    this.weightHistory = clientData.clientWeightHistory();
  }


  clientCreatePage(): void {
    this.navCtrl.push(ClientCreatePage);
  }

  clientListPage(): void {
    this.navCtrl.push(ClientListPage);
  }

  weightTrack(): void {
    this.clientData.clientTrackWeight(this.weightTrackForm.value.weight);
    this.weightTrackForm.reset();
  }

}
