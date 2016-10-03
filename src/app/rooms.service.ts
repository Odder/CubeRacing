import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RoomsService {

  rooms: FirebaseListObservable<any[]>;

  constructor ( af: AngularFire ) {
    this.rooms = af.database.list('Rooms');
  }

  listRooms() {
    return this.rooms;
  }

}
