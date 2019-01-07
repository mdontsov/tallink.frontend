import { Component, OnInit, Input } from '@angular/core';
import { GuestService } from '../guest.service';
import { Guest } from '../guest';
import { Observable, from } from 'rxjs';
import { ConferenceService } from '../conference.service';
import { Conference } from '../conference';
import { HttpErrorResponse } from '@angular/common/http';
import { EventService } from '../event.service';

@Component({
  selector: 'register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {

  conferences: Observable<Conference[]>;
  conference: Conference = new Conference();
  guests: Observable<Guest[]>;
  guest: Guest = new Guest();
  submitted = false;
  guestSelected: any;
  conferenceSelected: any;

  constructor(
    private guestService: GuestService,
    private conferenceService: ConferenceService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.conferenceService.findConference()
      .subscribe(
        data => this.conferences = data as Observable<Conference[]>,
        error => console.log(error));

    this.guestService.findGuests()
      .subscribe(
        data => this.guests = data as Observable<Guest[]>,
        error => console.log(error));
  }

  registerForEvent() {
    this.submitted = false;
    this.conference = new Conference();
    this.guest = new Guest();
  }

  save() {
    this.eventService.registerForEvent(this.guestSelected, this.conferenceSelected)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
