import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private serviceUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  findRoom(conferenceName: any): Observable<Object> {
    return this.http.get(`${this.serviceUrl}/room/findAvailable`, { params: new HttpParams().set('conferenceName', conferenceName) });
  }

  findRooms(): Observable<Object> {
    return this.http.get(`${this.serviceUrl}/room/find`);
  }
}
