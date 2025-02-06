import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = "http://localhost:3000/buletin/articles/"
  private http = inject(HttpClient)

  articles: User[] = []

  constructor() { }

  getAll(): Observable<User[]> {
    return this.http
    .get<User[]>(this.BASE_URL);
  }


  get(id: number): Observable<User>{
    return this.http
    .get<User>(this.BASE_URL + id)
  }

  add(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
    .post<User>(this.BASE_URL, user, { headers });
  }

  update(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
    .post<User>(this.BASE_URL, user, { headers });
  }

  delete(id: number): Observable<void>{
    return this. http.delete<void>(this.BASE_URL + id)
  }

}