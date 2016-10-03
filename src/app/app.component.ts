import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { RoomsService } from "./rooms.service";
import { ChatService } from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  chat: FirebaseListObservable<any[]>;
  title:string = 'app works!';

  constructor ( af: RoomsService, chat: ChatService ) {
    this.items = af.listRooms();
    this.chat = chat.getMessages();
  }
}
