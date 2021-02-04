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

// Add
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

// Edit
export const editPostAction = createAction(
  PostActionTypes.EDIT_POST,
  props<{ postId: string; post: PostInputInterface }>()
);

export const editPostSuccessAction = createAction(
  PostActionTypes.EDIT_POST_SUCCESS,
  props<{ post: PostInterface }>()
);

export const editPostFailureAction = createAction(
  PostActionTypes.EDIT_POST_FAILURE
);

// Delete
export const deletePostAction = createAction(
  PostActionTypes.DELETE_POST,
  props<{ postId: number }>()
);

export const deletePostSuccessAction = createAction(
  PostActionTypes.DELETE_POST_SUCCESS
);

export const deletePostFailureAction = createAction(
  PostActionTypes.DELETE_POST_FAILURE
);
