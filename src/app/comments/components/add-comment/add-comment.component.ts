import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  addComment(val) {
    this.commentService.add(val);
  }
}
