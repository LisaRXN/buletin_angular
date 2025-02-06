import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';
import { ReviewService } from '../../services/review/review.service';
import { Review } from '../../models/review.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LikeService } from '../../services/like/like.service';
import { Like } from '../../models/like.model';
import { identifierName } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-article-single',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-single.component.html',
  styleUrl: './article-single.component.css',
})
export class ArticleSingleComponent {
  private route = inject(ActivatedRoute);
  private routeSubscription: Subscription | null = null;
  private reviewSubscription: Subscription | null = null;
  private likeSubscription: Subscription | null = null;
  private articleService = inject(ArticleService);
  private likeService = inject(LikeService);
  private reviewService = inject(ReviewService);
  private fb = inject(FormBuilder);

  authService = inject(AuthService);
  articleId: number = 0;
  article: Article | undefined = undefined;
  reviews: Review[] | undefined = undefined;
  isOpenComment: boolean = false;
  isLiked: boolean = false;
  user: User | null | undefined = undefined;
  errorMessage = '';

  reviewFormGroup = this.fb.group({
    content: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.fetchArticle();
    this.user = this.authService.user();
    this.fetchUserLike();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.reviewSubscription?.unsubscribe();
    this.likeSubscription?.unsubscribe();
  }

  fetchUserLike() {
    if (this.user) {
      this.likeSubscription = this.likeService
        .getByUser(this.articleId, this.user.id)
        .subscribe((result) => {
          this.isLiked = result.is_liked;
        });
    }
  }

  fetchArticle() {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.articleId = parseInt(id, 10);
        this.articleService.get(this.articleId).subscribe((article) => {
          this.article = article;
        });
        this.reviewService
          .getAllbyArticle(this.articleId)
          .subscribe((reviews) => {
            this.reviews = reviews;
          });
      }
    });
  }

  like() {
    this.isLiked = !this.isLiked;
    if (this.user) {
      const credential = {
        id: 0,
        article_id: this.articleId,
        user_id: this.user.id,
        is_liked: this.isLiked,
      };
      this.likeSubscription = this.likeService.like(credential).subscribe({
        next: () => {this.fetchUserLike()}
      });
    }
  }

  openComment() {
    this.isOpenComment = !this.isOpenComment;
  }

  sendComment(event: Event) {
    event.preventDefault();
    if (this.user) {
      const newReview: Review = {
        content: this.reviewFormGroup.value.content || '',
        article_id: this.articleId,
        user_id: this.user.id,
      };

      this.reviewSubscription = this.reviewService.add(newReview).subscribe({
        next: (response) => {
          console.log('Comment add successfully :', response);
          this.reviewFormGroup.reset();
          this.fetchArticle();
        },
        error: (err) => {
          console.error('Error adding comment :', err);
          this.errorMessage = err.error?.error;
        },
      });
    }
  }
}
