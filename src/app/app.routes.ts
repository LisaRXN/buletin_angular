import { Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleSingleComponent } from './pages/article-single/article-single.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ArticlesComponent,
  },
  {
    path: 'article/:id',
    component: ArticleSingleComponent,
  }

  // {
  //   path: "**",
  //   component: NotFoundComponent
  // }
];
