import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../conference.service';
import { Conference } from '../conference';
import { Observable, from } from 'rxjs';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'room-search',
  templateUrl: './room-search.component.html',
  styleUrls: ['./room-search.component.css']
})
export class RoomSearchComponent implements OnInit {

  conferences: Observable<Conference[]>;
  rooms: Observable<Room[]>;
  selected: any;
  submitted = false;

  constructor(private roomService: RoomService, private conferenceService: ConferenceService) { }

  ngOnInit() {
    this.conferenceService.findConference()
      .subscribe(
        data => this.conferences = data as Observable<Conference[]>,
        error => console.log(error));

    this.roomService.findRooms()
      .subscribe(
        data => this.rooms = data as Observable<Room[]>,
        error => console.log(error));
  }

  findRoom() {
    this.roomService.findRoom(this.selected)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.findRoom();
  }
}
