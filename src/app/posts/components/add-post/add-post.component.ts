import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addPostAction } from '../../store/actions/posts.actions';
import { PostStateInterface } from '../../store/types/post.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostSubscription: Subscription;
  constructor(private store: Store<PostStateInterface>) {}

  ngOnInit(): void {}

  addPost(val) {
    this.store.dispatch(addPostAction({ post: val }));
  }
}
