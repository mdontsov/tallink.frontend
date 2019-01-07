import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { ConferenceMenuComponent } from '../conference-menu/conference-menu.component';
import { from } from 'rxjs';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event;

  constructor(
    private eventService: EventService,
    private menuComponent: ConferenceMenuComponent) { }

  ngOnInit() {
  }


  deleteConference() {
    this.eventService.deleteConference(this.event.conferenceName)
      .subscribe(
        data => {
          console.log(data);
          this.menuComponent.refresh();
        },
        error => console.log(error));
  }

  removeGuest(guest_full_name: string) {
    this.eventService.removeGuest(this.event.guestFullName, guest_full_name)
      .subscribe(
        data => {
          console.log(data);
          this.menuComponent.refresh();
        },
        error => console.log(error));
  }

  deleteAll() {
    this.eventService.deleteAllEvents()
      .subscribe(
        data => {
          console.log(data);
          this.menuComponent.refresh();
        },
        error => console.log(error));
  }
}
