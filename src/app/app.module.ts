import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { ConferenceDetailsComponent } from './conference-details/conference-details.component';
import { ConferenceMenuComponent } from './conference-menu/conference-menu.component';
import { CreateConferenceComponent } from './create-conference/create-conference.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomPipePipe } from './custom-pipe.pipe';
import { RoomListComponent } from './room-list/room-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConferenceDetailsComponent,
    ConferenceMenuComponent,
    CreateConferenceComponent,
    RegisterEventComponent,
    RoomSearchComponent,
    CustomPipePipe,
    RoomListComponent,
    CreateGuestComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
