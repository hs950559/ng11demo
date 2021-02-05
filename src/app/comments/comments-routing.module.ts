import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { CommentResolver } from './services/comment.resolver';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {
      comments: CommentResolver,
    },
  },
  {
    path: 'new',
    component: AddCommentComponent,
  },
  {
    path: ':commentId/edit',
    component: EditCommentComponent,
    // resolve: {
    //   comments: CommentResolver,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
