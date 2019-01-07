import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private serviceUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  findEvent(): Observable<any> {
    return this.http.get(`${this.serviceUrl}/event`);
  }

  deleteConference(conferenceName: string): Observable<Object> {
    return this.http.delete(`${this.serviceUrl}/event/deleteConference/${conferenceName}`);
  }

  removeGuest(guestFullName: string, value: any): Observable<Object> {
    return this.http.put(`${this.serviceUrl}/event/removeGuest/${guestFullName}`, value);
  }

  registerForEvent(guestFullName: any, conferenceName: any): Observable<Object> {
    return this.http.post(`${this.serviceUrl}/event/create`, { guestFullName, conferenceName });
  }

  deleteAllEvents(): Observable<any> {
    return this.http.delete(`${this.serviceUrl}/event/deleteAll`);
  }

}
