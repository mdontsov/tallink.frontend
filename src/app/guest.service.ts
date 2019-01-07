import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private serviceUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  addGuest(guest_full_name: string, conference_name: string, guestFullName: any, conferenceName: any): Observable<Object> {
    // tslint:disable-next-line:max-line-length
    return this.http.patch(`${this.serviceUrl}/conference/add/${guest_full_name}, ${conference_name}`, { guestFullName, conferenceName });
  }

  registerGuest(guestFullName: string, conferenceName: any): Observable<Object> {
    return this.http.patch(`${this.serviceUrl}/conference/registerGuest`, { guestFullName, conferenceName });
  }

  findGuests(): Observable<Object> {
    return this.http.get(`${this.serviceUrl}/guest`);
  }

  deleteAllGuests(): Observable<any> {
    return this.http.delete(`${this.serviceUrl}/guest/deleteAll`);
  }

  createGuest(guest: Object): Observable<Object> {
    return this.http.post(`${this.serviceUrl}/guest/create`, guest);
  }

}
