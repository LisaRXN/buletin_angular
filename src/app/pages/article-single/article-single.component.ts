import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';


@Component({
  selector: 'app-article-single',
  imports: [],
  templateUrl: './article-single.component.html',
  styleUrl: './article-single.component.css'
})
export class ArticleSingleComponent {


      private route = inject(ActivatedRoute)
      private routeSubscription: Subscription | null = null
      private articleService = inject(ArticleService)
      
      articleId: number = 0
      article: Article | undefined = undefined
      
    
     ngOnInit(): void {
      this.fetchArticle()
     }
    
    
    
     fetchArticle(){
      this.routeSubscription = this.route.paramMap.subscribe(
        params => {
          const id = params.get('id');
          if (id) {
            this.articleId = parseInt(id, 10);
            const articleFound = this.articleService.get(this.articleId).subscribe(
              articleFound => {
                console.log('article: ', articleFound)
                this.article = articleFound
    
              }
            )
          }
        }
       )
     }

}



