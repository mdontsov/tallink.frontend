import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ConferenceService } from '../conference.service';
import { Conference } from '../conference';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'conference-menu',
  templateUrl: './conference-menu.component.html',
  styleUrls: ['./conference-menu.component.css']
})
export class ConferenceMenuComponent implements OnInit {

  conferences: Observable<Conference[]>;
  events: Observable<Event[]>;

  constructor(private conferenceService: ConferenceService, private eventService: EventService) { }

  ngOnInit() {
    this.refresh();
  }

  deleteConferences() {
    this.conferenceService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.refresh();
        },
        error => console.log('Error: ' + error));
  }

  refresh() {
    this.conferences = this.conferenceService.findConference();
    this.events = this.eventService.findEvent();
  }
}
