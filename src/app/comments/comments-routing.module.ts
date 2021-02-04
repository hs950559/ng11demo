import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentService } from './services/comment.service';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
  },
  {
    path: 'new',
    component: AddCommentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CommentService],
})
export class CommentsRoutingModule {}
