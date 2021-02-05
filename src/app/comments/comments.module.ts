import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import {
  EntityDataModule,
  EntityDataService,
  EntityDefinitionService,
} from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { FormsModule } from '@angular/forms';
import { CommentResolver } from './services/comment.resolver';
import { CommentService } from './services/comment.service';
import { CommentDataService } from './services/comment-data.service';
import { entityMetadata } from './entity-metadata';

@NgModule({
  declarations: [CommentsComponent, AddCommentComponent, EditCommentComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    FormsModule,
    HttpClientModule,
    EntityDataModule.forRoot({}),
  ],
  providers: [CommentResolver, CommentService, CommentDataService],
})
export class CommentsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private commentDataService: CommentDataService
  ) {
    this.eds.registerMetadataMap(entityMetadata);
    this.entityDataService.registerService('Comment', this.commentDataService);
  }
}
