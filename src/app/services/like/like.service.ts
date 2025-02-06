import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Like } from '../../models/like.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  constructor() {}

  private BASE_URL = 'http://localhost:3000/buletin/likes/';
  private http = inject(HttpClient);

  getAllByArticle(id: number): Observable<Like> {
    return this.http.get<Like>(this.BASE_URL + id);
  }

  getByUser(article_id:number, user_id:number): Observable<Like> {
    return this.http.get<Like>(this.BASE_URL + article_id + '/' + user_id);
  }

  like(credential: Like): Observable<Like> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Like>(this.BASE_URL, credential, {headers});
  }
}
