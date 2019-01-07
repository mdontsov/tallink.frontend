import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { from } from 'rxjs';

@Component({
  selector: 'create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  guest: Guest = new Guest();
  submitted = false;

  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.submitted = false;
    this.guest = new Guest();
  }

  newGuest() {
    this.submitted = false;
    this.guest = new Guest();
  }

  deleteAllGuests() {
    this.guestService.deleteAllGuests()
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  save() {
    this.guestService.createGuest(this.guest)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
