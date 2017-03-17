import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';
import firebase from 'firebase';

declare const FCMPlugin: any;

@Injectable()
export class AuthData {
  userId: string = null;

  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) { this.userId = user.uid; }
    });

  }

  userLogin(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({ email, password });
  }

  userSignup(email: string, password: string, fullName: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.createUser({ email, password }).then( user => {
      FCMPlugin.getToken( token => {
        this.af.database.object(`/userProfile/${user.uid}/`).set({
          admin: true, 
          email,
          fullName,
          token: token
        });
      });
    });
  }

  userLogout(): firebase.Promise<void> {
    return this.af.auth.logout();
  }

  passwordReset(email: string): firebase.Promise<FirebaseAuthState> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  isAsdmin(): Promise<any> {
    return new Promise( (resolve, reject ) => {
      firebase.database().ref(`userProfile/${this.userId}/admin`).once('value', adminSnapshot => {
        resolve(adminSnapshot.val());
      });
    });
  }

}
