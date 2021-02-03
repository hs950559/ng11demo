import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addPostAction,
  addPostFailureAction,
  addPostSuccessAction,
  getPostsAction,
  getPostsFailureAction,
  getPostsSuccessAction,
} from '../actions/posts.actions';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../types/post.interface';
import { Router } from '@angular/router';
import { PostActionTypes } from '../posts-action-types';

@Injectable()
export class PostsEffect {
  getPosts$ = createEffect(() =>
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

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPostAction),
      switchMap(({ post }) => {
        return this.postService.addPost(post).pipe(
          map((post: PostInterface) => {
            return addPostSuccessAction({ post });
          }),
          catchError(() => {
            return of(addPostFailureAction());
          })
        );
      })
    )
  );

  createPostSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PostActionTypes.ADD_POST_SUCCESS),
        tap(() => {
          this.router.navigateByUrl('/posts');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router
  ) {}
}
