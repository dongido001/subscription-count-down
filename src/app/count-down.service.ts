import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

interface userCount {
  userCount: number,
  targetCount: number
}

export interface userData {
  name: String;
  email: String;
}

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  constructor(private http: HttpClient) { }

  getUserCount (): Observable<userCount> {
    return this.http.get<userCount>(`${environment.apiUrl}/userCount`)
  }

  addNewUser (userData: userData): Observable<userData> {
    return this.http.post<userData>(`${environment.apiUrl}/addUser`, userData)
  }
}
