import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from '../../models/review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private BASE_URL = "http://localhost:3000/buletin/reviews/"
  private http = inject(HttpClient)

  articles: Review[] = []
  
    constructor() { }
  
    getAllbyArticle(id:number ): Observable<Review[]> {
      return this.http
      .get<Review[]>(this.BASE_URL + id);
    }
  
  
    get(id: number): Observable<Review>{
      return this.http
      .get<Review>(this.BASE_URL + 'review/' + id)
    }
  
    add(review: Review): Observable<Review> {
      console.log("review", review)
          const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http
      .post<Review>(this.BASE_URL, review, { headers });
    }

    getLastByArticle(id:number): Observable<Review>{
      return this.http
      .get<Review>(this.BASE_URL + 'last/' + id )
    }
  
    delete(id: number): Observable<void>{
      return this. http.delete<void>(this.BASE_URL + id)
    }
}
