
 import { inject, Injectable } from '@angular/core';
import { IArticle } from '../../interfaces/article.interface';
import { Article } from '../../models/article.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })


  // export class ArticleService {
  
  //   articles: Article[] = [

  //   ]
  
  //   constructor() { 
  
  //     const article1 = new Article()
  //     article1.id = 1 
  //     article1.title = "Article n°1"
  //     article1.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  //     article1.image = "/img/article.png"
  //     article1.source = "DailyGame"
  //     article1.category = "Video Game"
  //     article1.time = "10 min"
  //     article1.createdAt = new Date()
  //     this.articles.push(article1)
  
  //     const article2 = new Article()
  //     article2.id = 2 
  //     article2.title = "Article n°2"
  //     article2.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  //     article2.image = "/img/article2.png"
  //     article2.source = "Le Monde"
  //     article2.category = "Video Game"
  //     article2.time = "4 min"
  //     article2.createdAt = new Date()
  //     this.articles.push(article2)
  //   }
  
  //   getAll(){
  //     return this.articles
  //   }
  
  // }


  export class ArticleService {

    private BASE_URL = "http://localhost:3000/buletin/articles/"
    private http = inject(HttpClient)
  
    articles: Article[] = [

    ]
  
  
    getAll(): Observable<Article[]> {
      return this.http
      .get<Article[]>(this.BASE_URL);
    }
    

    get(id: number): Observable<Article>{
      return this.http
      .get<Article>(this.BASE_URL + id)
    }

    add(article: Article): Observable<Article> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http
      .post<Article>(this.BASE_URL, article, { headers });
    }

    update(article: Article): Observable<Article> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http
      .post<Article>(this.BASE_URL, article, { headers });
    }

    delete(id: number): Observable<void>{
      return this. http.delete<void>(this.BASE_URL + id)
    }

  
  }
