import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { CommentInterface } from '../../store/types/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments$: Observable<CommentInterface[]>;
  constructor(private commentService: CommentService) {
    this.comments$ = this.commentService.entities$;
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getAll();
  }
}
