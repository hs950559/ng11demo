import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { editPostAction } from '../../store/actions/posts.actions';
import { getPostById } from '../../store/posts.selectors';
import {
  PostInterface,
  PostStateInterface,
} from '../../store/types/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  sub: Subscription;
  post: Partial<PostInterface>;
  constructor(
    private store: Store<PostStateInterface>,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetcheData();
  }

  fetcheData() {
    this.post = this.location.getState();

    if (!this.post.id) {
      this.fetchSinglePost();
    }
  }

  fetchSinglePost() {
    const postId = this.route.snapshot.paramMap.get('postId');
    this.sub = this.store
      .pipe(
        select(getPostById, { id: postId }),
        tap((post) => {
          this.post = post;
        })
      )
      .subscribe();
  }

  updatePost(post) {
    this.store.dispatch(editPostAction({ postId: String(this.post.id), post }));
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
