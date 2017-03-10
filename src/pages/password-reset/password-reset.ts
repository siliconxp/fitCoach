import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html'
})
export class PasswordResetPage {
  passwordResetForm: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public formBuilder: FormBuilder, public authData: AuthData) {
      this.passwordResetForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
      });
    
  }

  passwordReset(){
    if (!this.passwordResetForm.valid){
      console.log(this.passwordResetForm.value);
    } else {
      this.authData.passwordReset(this.passwordResetForm.value.email).then((user) => {
        const alert = this.alertCtrl.create({
          message: "We just sent you a reset link to your email",
          buttons: [{
            text: "Ok",
            role: 'cancel',
            handler: () => {
              this.navCtrl.pop();
            }
          }]
        });

        alert.present();

      }, (error) => {
        const alert = this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: "Ok", role: 'cancel' }]
        });
        alert.present();
      });
    }
  }

}
