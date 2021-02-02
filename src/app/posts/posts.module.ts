import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, HttpClientModule, PostsRoutingModule],
  providers: [PostService],
})
export class PostsModule {}
