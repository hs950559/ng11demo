import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { CommentInterface } from '../store/types/comment.interface';

@Injectable()
export class CommentService extends EntityCollectionServiceBase<CommentInterface> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Comment', serviceElementsFactory);
  }
}
