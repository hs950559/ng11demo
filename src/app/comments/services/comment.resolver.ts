import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root',
})
export class CommentResolver implements Resolve<boolean> {
  constructor(private commentService: CommentService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.commentService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.commentService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
