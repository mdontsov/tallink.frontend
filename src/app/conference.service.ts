import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conference } from './conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  private serviceUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  createConference(conference: Object): Observable<Object> {
    return this.http.post(`${this.serviceUrl}/conference/create`, conference);
  }

  updateConference(conference_name: string, value: any): Observable<Object> {
    return this.http.put(`${this.serviceUrl}/${conference_name}`, value);
  }

  addConference(conference_name: string, room_name: string, conferenceName: any, roomName: any): Observable<Object> {
    return this.http.patch(`${this.serviceUrl}/room/add/${conference_name}, ${room_name}`, { conferenceName, roomName });
  }

  cancelConference(conference_name: string, value: any): Observable<Object> {
    return this.http.put(`${this.serviceUrl}/conference/cancel/${conference_name}`, value);
  }

  activateConference(conference_name: string, value: any): Observable<Object> {
    return this.http.put(`${this.serviceUrl}/conference/activate/${conference_name}`, value);
  }

  findConference(): Observable<any> {
    return this.http.get(`${this.serviceUrl}/conference`);
  }

  findConferenceList(): Observable<any> {
    return this.http.get(`${this.serviceUrl}/conferenceList`);
  }

  findRooms(): Observable<Object> {
    return this.http.get(`${this.serviceUrl}/room/find`);
  }

  findAvailableRoom(): Observable<Object> {
    return this.http.get(`${this.serviceUrl}/room/available`);
  }

  removeConference(conference_name: string, room_name: string, conferenceName: any, roomName: any): Observable<Object> {
    return this.http.put(`${this.serviceUrl}/room/remove/${conference_name}, ${room_name}`, conferenceName, roomName);
  }

  findRoomByConferenceName(conference_name: string): Observable<any> {
    return this.http.get(`${this.serviceUrl}/room/available/${conference_name}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.serviceUrl}/conference/deleteAll`);
  }
}
