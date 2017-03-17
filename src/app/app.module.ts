import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ClientCreatePage } from '../pages/client-create/client-create';
import { ClientDetailPage } from '../pages/client-detail/client-detail';
import { ClientListPage } from '../pages/client-list/client-list';
import { LoginPage } from '../pages/login/login';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { SignupPage } from '../pages/signup/signup';

import { AuthData } from '../providers/auth-data';
import { ClientData } from '../providers/client-data'

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import {MomentModule} from 'angular2-moment';

export const firebaseConfig = {
  apiKey: "AIzaSyDWujPoqHvjd_I-I7ZhwFFPuhvgI-fHQi4",
  authDomain: "track-my-weight-d9926.firebaseapp.com",
  databaseURL: "https://track-my-weight-d9926.firebaseio.com",
  storageBucket: "track-my-weight-d9926.appspot.com",
  messagingSenderId: "1011429127424"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientCreatePage,
    ClientDetailPage,
    ClientListPage,
    LoginPage,
    PasswordResetPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientCreatePage,
    ClientDetailPage,
    ClientListPage,
    LoginPage,
    PasswordResetPage,
    SignupPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    ClientData
  ]
})
export class AppModule {}