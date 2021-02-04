import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { getPostsAction } from '../store/actions/posts.actions';
import { arePostsLoaded } from '../store/posts.selectors';

@Injectable()
export class PostResolver implements Resolve<boolean> {
  loaded = false;
  constructor(private store: Store<AppStateInterface>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(arePostsLoaded),
      tap((postsLoaded) => {
        if (!this.loaded && !postsLoaded) {
          this.loaded = true;
          this.store.dispatch(getPostsAction());
        }
        console.log('hhhhh', postsLoaded);
      }),
      filter((postsLoaded) => postsLoaded),
      first(),
      finalize(() => (this.loaded = false))
    );
  }
}
