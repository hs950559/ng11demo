import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { PostStateInterface } from './types/post.interface';

export const postsFeatureSelector = createFeatureSelector<PostStateInterface>(
  'posts'
);

export const isLoadingSelector = createSelector(
  postsFeatureSelector,
  (postsState: PostStateInterface) => postsState.isLoading
);

export const errorSelector = createSelector(
  postsFeatureSelector,
  (postsState: PostStateInterface) => postsState.error
);

export const postsSelector = createSelector(
  postsFeatureSelector,
  (postsState: PostStateInterface) => postsState.data
);

export const arePostsLoaded = createSelector(
  postsFeatureSelector,
  (state) => state.loaded
);
