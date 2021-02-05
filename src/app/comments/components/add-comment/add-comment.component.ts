import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private commentService: CommentService, private router: Router) {}

  ngOnInit(): void {}

  addComment(val) {
    this.sub = this.commentService.add(val).subscribe(() => {
      this.router.navigateByUrl('/comments');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
