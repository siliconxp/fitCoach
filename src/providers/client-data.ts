import { Injectable } from '@angular/core';
import { 
  AngularFire, 
  FirebaseListObservable, 
  FirebaseObjectObservable } from 'angularfire2';
import firebase from 'firebase';

@Injectable()
export class ClientData {
  userId: string;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe( user => {
      this.userId = user.uid;
    });
  }

  clientCreate(fullName: string, email: string, startingWeight: number): firebase.Promise<any> {
    return this.af.database.list(`userProfile/${this.userId}/clientList/`).push({
      fullName, 
      email, 
      startingWeight: startingWeight * 1
    });
  }

  clientListShow(): FirebaseListObservable<any> {
    return this.af.database.list(`userProfile/${this.userId}/clientList/`);
  }

  clientDetailShow(clientId: string): FirebaseObjectObservable<any> {
    return this.af.database.object(`userProfile/${clientId}`);
  }

  clientTrackWeight(weight: number): firebase.Promise<any> {
    return this.af.database.list(`userProfile/${this.userId}/weightTrack/`).push({
      weight: weight,
      date: firebase.database.ServerValue.TIMESTAMP
    });
  }

  clientWeightHistory(): FirebaseListObservable<any> {
    return this.af.database.list(`userProfile/${this.userId}/weightTrack`, {
      query: {
        orderByChild: 'date',
        limitToLast: 5
      }
    });
  }

  clientWeightHistoryCoach(clientId: string): FirebaseListObservable<any> {
    return this.af.database.list(`userProfile/${clientId}/weightTrack`, {
      query: {
        orderByChild: 'date',
        limitToLast: 5
      }
    });
  }


}
