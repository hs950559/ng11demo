import { act } from '@ngrx/effects';
import { Action, createReducer, on } from '@ngrx/store';
import { startWith } from 'rxjs/operators';
import {
  addPostAction,
  addPostFailureAction,
  addPostSuccessAction,
  deletePostAction,
  deletePostFailureAction,
  deletePostSuccessAction,
  editPostAction,
  editPostSuccessAction,
  getPostsAction,
  getPostsFailureAction,
  getPostsSuccessAction,
} from './actions/posts.actions';

import { PostStateInterface } from './types/post.interface';

const initialState: PostStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const _postReducer = createReducer(
  initialState,
  on(
    getPostsAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getPostsSuccessAction,
    (state, action): PostStateInterface => ({
      ...state,
      isLoading: false,
      data: action.posts,
      loaded: true,
    })
  ),

  on(
    getPostsFailureAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    addPostAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    addPostSuccessAction,
    (state, action): PostStateInterface => ({
      ...state,
      isLoading: false,
      data: [...state.data, action.post],
    })
  ),

  on(
    addPostFailureAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    editPostAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    editPostSuccessAction,
    (state, action): PostStateInterface => {
      const index = state.data.findIndex((h) => h.id === action.post.id);
      let updatedState = [...state.data];
      if (index >= 0) {
        updatedState = [
          ...state.data.slice(0, index),
          action.post,
          ...state.data.slice(index + 1),
        ];
      }

      return {
        ...state,
        isLoading: false,
        data: updatedState,
      };
    }
  ),

  on(
    addPostFailureAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  // Delete
  on(
    deletePostAction,
    (state, action): PostStateInterface => {
      const posts = state.data.filter((h) => h.id !== action.postId);
      return {
        ...state,
        data: posts,
      };
    }
  ),

  on(
    deletePostSuccessAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  on(
    deletePostFailureAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function postReducer(state: PostStateInterface, action: Action) {
  return _postReducer(state, action);
}
