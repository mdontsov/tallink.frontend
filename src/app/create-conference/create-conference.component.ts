import { Component, OnInit } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceService } from '../conference.service';

@Component({
  selector: 'create-conference',
  templateUrl: './create-conference.component.html',
  styleUrls: ['./create-conference.component.css']
})
export class CreateConferenceComponent implements OnInit {

  conference: Conference = new Conference();
  submitted = false;

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit() { }

  newConference(): void {
    this.submitted = false;
    this.conference = new Conference();
  }

  save() {
    this.conferenceService.createConference(this.conference)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
