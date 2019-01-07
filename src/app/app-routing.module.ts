import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferenceMenuComponent } from './conference-menu/conference-menu.component';
import { CreateConferenceComponent } from './create-conference/create-conference.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { RoomSearchComponent } from './room-search/room-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'conference', pathMatch: 'full' },
  { path: 'conferenceMenu', component: ConferenceMenuComponent },
  { path: 'createConference', component: CreateConferenceComponent },
  { path: 'createGuest', component: CreateGuestComponent },
  { path: 'registerEvent', component: RegisterEventComponent },
  { path: 'findRoom', component: RoomSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
