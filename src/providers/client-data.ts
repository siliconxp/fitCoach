import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';

@Injectable()
export class ClientData {

  constructor(public af: AngularFire) {}

  clientCreate(fullName: string, email: string, password: string, startingWeight: number): any {
    return console.log(fullName, email, password, startingWeight);
    /**
     * In this function the app will send the data to Firebase Cloud Functions, 
     * where we'll receive the data, create the user's account, and store the 
     * information about the client inside a 'clients' node in the coach's profile.
     */
  }

  clientListShow(): FirebaseListObservable<any> {
    return this.af.database.list(`/${this.af.auth.getAuth}/clientList/`);
  }

  clientSendNotification(clientId: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      console.log("I'm inside the Promise!");
      resolve(true);
    });

    /**
     * This function will send the client's ID to Firebase Cloud Function, where it will
     * send a notification to that user to remind him/her to track today's weight so the
     * coach can see the progess.
     */
  } 

}
