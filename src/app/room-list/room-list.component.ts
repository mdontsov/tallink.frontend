import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

}
