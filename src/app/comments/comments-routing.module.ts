import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentService } from './services/comment.service';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CommentService],
})
export class CommentsRoutingModule {}
