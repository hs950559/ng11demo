import { Action, createReducer, on } from '@ngrx/store';
import {
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
    })
  ),

  on(
    getPostsFailureAction,
    (state): PostStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function postReducer(state: PostStateInterface, action: Action) {
  return _postReducer(state, action);
}
