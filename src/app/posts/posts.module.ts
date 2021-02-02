import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './store/posts.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffect } from './store/effects/posts.effects';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature([PostsEffect]),
  ],
  providers: [PostService],
})
export class PostsModule {}
