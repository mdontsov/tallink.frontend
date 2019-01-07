import { Component, OnInit, Input } from '@angular/core';
import { ConferenceService } from '../conference.service';
import { Conference } from '../conference';
import { ConferenceMenuComponent } from '../conference-menu/conference-menu.component';

@Component({
  selector: 'conference-details',
  templateUrl: './conference-details.component.html',
  styleUrls: ['./conference-details.component.css']
})
export class ConferenceDetailsComponent implements OnInit {

  @Input() conference: Conference;

  constructor(
    private conferenceService: ConferenceService,
    private menuComponent: ConferenceMenuComponent) { }

  ngOnInit() {
  }

  cancelConferenceStatus(isActive: boolean) {
    this.conferenceService.cancelConference(this.conference.conferenceName, isActive)
      .subscribe(
        data => {
          console.log(data);
          this.conference = data as Conference;
          this.menuComponent.refresh();
        },
        error => console.log(error));
  }

  activateConferenceStatus(isActive: boolean) {
    this.conferenceService.activateConference(this.conference.conferenceName, isActive)
      .subscribe(
        data => {
          console.log(data);
          this.conference = data as Conference;
          this.menuComponent.refresh();
        },
        error => console.log(error));
  }
}
