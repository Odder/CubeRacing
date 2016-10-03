import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { MaterialModule } from '@angular/material';

// Services
import { RoomsService } from './rooms.service';
import { ChatService } from './chat.service';

// Firebase
import { AngularFireModule } from 'angularfire2';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Firebase config
export const firebaseConfig = {
  apiKey: 'AIzaSyApQZlzeJFzVvG11kDAcErIo0oNAI5zpHY',
  authDomain: 'cuberace.firebaseapp.com',
  databaseURL: 'https://cuberace.firebaseio.com',
  storageBucket: 'firebase-cuberace.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    RoomsService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
