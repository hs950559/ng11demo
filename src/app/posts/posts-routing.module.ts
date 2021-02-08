import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolver } from './services/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostResolver,
    },
  },
  {
    path: 'add',
    component: AddPostComponent,
  },
  {
    path: ':postId/edit',
    component: EditPostComponent,
    resolve: {
      posts: PostResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
