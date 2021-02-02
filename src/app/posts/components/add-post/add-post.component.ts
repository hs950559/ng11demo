import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit, OnDestroy {
  addPostSubscription: Subscription;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {}

  addPost(val) {
    this.addPostSubscription = this.postService
      .addPost(val)
      .subscribe((post) => {
        this.router.navigateByUrl('posts');
      });
  }

  ngOnDestroy() {
    this.addPostSubscription.unsubscribe();
  }
}
