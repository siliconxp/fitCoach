import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';
import firebase from 'firebase';


@Injectable()
export class AuthData {

  constructor(public af: AngularFire) {

  }

  userLogin(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({ email, password });
  }

  userSignup(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.createUser({ email, password });
  }

  userLogout(): firebase.Promise<void> {
    return this.af.auth.logout();
  }

  passwordReset(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

}
