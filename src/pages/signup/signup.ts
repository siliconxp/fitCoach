import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupForm: any;
  loading: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, public formBuilder: FormBuilder, public authData: AuthData) {

      this.signupForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    
  }

  userSignup(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authData.userSignup(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(HomePage);
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          
          const alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel' }]
          });
          alert.present();
          
        });
      
      });
      
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

}
