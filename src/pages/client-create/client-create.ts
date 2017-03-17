import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientData } from '../../providers/client-data';
import { EmailValidator } from '../../validators/email';


@Component({
  selector: 'page-client-create',
  templateUrl: 'client-create.html'
})
export class ClientCreatePage {
  clientCreateForm: any;

  constructor(public navCtrl: NavController, public clientData: ClientData, 
    public formBuilder: FormBuilder) {

    this.clientCreateForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      startingWeight: ['', Validators.required]
    });

  }

  clientCreate(): void {
    if (!this.clientCreateForm.valid){
      console.log(this.clientCreateForm.value);
    } else {
      this.clientData.clientCreate(this.clientCreateForm.value.name, this.clientCreateForm.value.email, 
        this.clientCreateForm.value.startingWeight).then( () => {
          this.navCtrl.pop();
      }, error => {
        console.error(error);
      });
    }
  }

}
