import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'add',
    component: AddPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
