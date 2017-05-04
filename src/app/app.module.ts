import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { MomentModule } from 'angular2-moment';
import { AuthProvider } from '../providers/auth/auth';
import { ClientProvider } from '../providers/client/client';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDWujPoqHvjd_I-I7ZhwFFPuhvgI-fHQi4",
  authDomain: "track-my-weight-d9926.firebaseapp.com",
  databaseURL: "https://track-my-weight-d9926.firebaseio.com",
  storageBucket: "track-my-weight-d9926.appspot.com",
  messagingSenderId: "1011429127424"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ClientProvider
  ]
})
export class AppModule {}
