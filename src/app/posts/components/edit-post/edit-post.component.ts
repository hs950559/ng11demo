import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostService } from '../../services/post.service';
import { editPostAction } from '../../store/actions/posts.actions';
import {
  PostInterface,
  PostStateInterface,
} from '../../store/types/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  post: PostInterface;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private store: Store<PostStateInterface>
  ) {}

  ngOnInit(): void {
    this.fetcheData();
  }

  fetcheData() {
    const postId = this.route.snapshot.paramMap.get('postId');
    this.sub = this.postService
      .getPost(postId)
      .subscribe((post: PostInterface) => {
        this.post = post;
      });
  }

  updatePost(post) {
    this.store.dispatch(editPostAction({ postId: String(this.post.id), post }));
  }
}
