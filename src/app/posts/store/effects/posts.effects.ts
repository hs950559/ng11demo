import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addPostAction,
  addPostFailureAction,
  addPostSuccessAction,
  deletePostAction,
  deletePostFailureAction,
  deletePostSuccessAction,
  editPostAction,
  editPostFailureAction,
  editPostSuccessAction,
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
import { LoaderService } from 'src/app/shared/components/loader/loader.service';

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

  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editPostAction),
      switchMap(({ postId, post }) => {
        this.loader.show();
        return this.postService.updatePost(postId, post).pipe(
          map((post: PostInterface) => {
            return editPostSuccessAction({ post });
          }),
          catchError(() => {
            this.loader.hide();
            return of(editPostFailureAction());
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

  editPostSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PostActionTypes.EDIT_POST_SUCCESS),
        tap(() => {
          this.loader.hide();
          this.router.navigateByUrl('/posts');
        })
      );
    },
    { dispatch: false }
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePostAction),
      switchMap(({ postId }) => {
        return this.postService.deletePost(postId).pipe(
          map(() => {
            return deletePostSuccessAction();
          }),
          catchError(() => {
            return of(deletePostFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router,
    private loader: LoaderService
  ) {}
}
