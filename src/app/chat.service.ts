import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseDatabase } from 'angularfire2';

@Injectable()
export class ChatService {

  room: Number;
  chatMessages: FirebaseDatabase;

  constructor ( af: AngularFire ) {
    this.room = 1;
    this.chatMessages = af.database;
  }

  getMessages() {
    return this.chatMessages.list('ChatMessages');
  }

}
