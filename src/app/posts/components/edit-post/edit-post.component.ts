import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../store/types/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: PostInterface;
  sub: Subscription;
  updateSub: Subscription;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
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
  updatePost() {
    this.updateSub = this.postService.updatePost(this.post).subscribe(() => {
      this.router.navigateByUrl('/posts');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.updateSub.unsubscribe();
  }
}
