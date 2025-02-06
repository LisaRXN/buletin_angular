import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000/buletin/auth/';
  private http = inject(HttpClient);
  private router = inject(Router);

  user = signal<User | null | undefined>(undefined);

  constructor() {
    this.loadUser(); 
  }

  private loadUser() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const loadUser = localStorage.getItem('user');
      if (loadUser) {
        this.user.set(Object.assign(new User(), JSON.parse(loadUser)));
      }
    }
    }


  login(credential: Credential): Observable<User | null | undefined> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(this.BASE_URL + 'login', credential, { headers })
      .pipe(
        tap((result: any) => {
          localStorage.setItem('token', result['token']);
          const user = Object.assign(new User(), result['user']);
          localStorage.setItem('user', JSON.stringify(user))
          this.user.set(user);
        }),
        map((result: any) => {
          const user = this.user();
          return user;
        })
      );
  }

  register(credential: Credential): Observable<User | null | undefined> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(this.BASE_URL + 'register', credential, { headers })
      .pipe(
        tap((result: any) => {
          console.log('register: ', result);
          this.router.navigate(['login']);
        })
      );
  }
}
