import { createAction, props } from '@ngrx/store';
import { PostActionTypes } from '../posts-action-types';
import { PostInputInterface, PostInterface } from '../types/post.interface';

export const getPostsAction = createAction(PostActionTypes.GET_POSTS);

export const getPostsSuccessAction = createAction(
  PostActionTypes.GET_POSTS_SUCCESS,
  props<{ posts: PostInterface[] }>()
);

export const getPostsFailureAction = createAction(
  PostActionTypes.GET_POSTS_FAILURE
);

export const addPostAction = createAction(
  PostActionTypes.ADD_POST,
  props<{ post: PostInputInterface }>()
);

export const addPostSuccessAction = createAction(
  PostActionTypes.ADD_POST_SUCCESS,
  props<{ post: PostInterface }>()
);

export const addPostFailureAction = createAction(
  PostActionTypes.ADD_POST_FAILURE
);
