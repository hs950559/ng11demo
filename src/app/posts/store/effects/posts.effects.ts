import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getPostsAction,
  getPostsFailureAction,
  getPostsSuccessAction,
} from '../actions/posts.actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../types/post.interface';

@Injectable()
export class PostsEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsAction),
      switchMap(() => {
        return this.postService.getPosts().pipe(
          map((posts: PostInterface[]) => {
            return getPostsSuccessAction({ posts });
          }),

          catchError(() => {
            return of(getPostsFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
