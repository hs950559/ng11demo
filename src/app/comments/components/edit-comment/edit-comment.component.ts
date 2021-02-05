import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { CommentInterface } from '../../store/types/comment.interface';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCommentComponent implements OnInit {
  comment: Partial<CommentInterface>;
  constructor(
    private router: Router,
    private location: Location,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    // const comment = this.location.getSt;
    // console.log('papaa', comment);
    this.comment = this.location.getState();
  }

  updateComment(val) {
    const comment: CommentInterface = { ...this.comment, ...val };
    this.commentService.update(comment);
    this.router.navigateByUrl('/comments');
  }
}
