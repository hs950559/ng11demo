import { createAction, props } from '@ngrx/store';
import { PostActionTypes } from '../posts-action-types';
import { PostInterface } from '../types/post.interface';

export const getPostsAction = createAction(PostActionTypes.GET_POSTS);

export const getPostsSuccessAction = createAction(
  PostActionTypes.GET_POSTS_SUCCESS,
  props<{ posts: PostInterface[] }>()
);

export const getPostsFailureAction = createAction(
  PostActionTypes.GET_POSTS_FAILURE
);
