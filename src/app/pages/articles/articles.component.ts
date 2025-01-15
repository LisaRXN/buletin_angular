import { Component, effect, inject, signal } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';
import { SourceService } from '../../services/source/source.service';
import { Source } from '../../models/source.model';
import { toSignal } from "@angular/core/rxjs-interop"
import { Router } from "@angular/router"


@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  articleService = inject(ArticleService)
  sourceService = inject(SourceService)
  router = inject(Router)

  articles = toSignal( this.articleService.getAll(), { initialValue: [] })
  lastArticle = signal<Article | undefined>(undefined);

  sources = toSignal( this.sourceService.getAll(), { initialValue: [] })

  constructor(){
    effect(() => {
      const articlesList = this.articles();
      if (articlesList.length > 0) {
        this.lastArticle.set(articlesList[0]);
      }
    });
  }

  goToArticle(article: Article | undefined){
    this.router.navigate(['article', article?.id])
  }

  // articles = signal<Article[]>(this.articleService.getAll())

  // sources = signal<Source[]>(this.sourceService.getAll())



}
