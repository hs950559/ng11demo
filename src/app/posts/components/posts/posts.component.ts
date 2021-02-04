import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deletePostAction,
  getPostsAction,
} from '../../store/actions/posts.actions';
import { postsSelector } from '../../store/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  removePost(post) {
    this.store.dispatch(deletePostAction({ postId: post.id }));
  }
}
