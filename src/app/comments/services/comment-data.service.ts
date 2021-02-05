import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/posts/store/types/post.interface';
import { CommentInterface } from '../store/types/comment.interface';

@Injectable()
export class CommentDataService extends DefaultDataService<CommentInterface> {
  API_URL = 'https://jsonplaceholder.typicode.com/comments';
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Comment', http, httpUrlGenerator);
  }

  getAll(): Observable<CommentInterface[]> {
    return this.http.get<any>(this.API_URL);
  }

  add(comment: any) {
    return this.http.post<any>(this.API_URL, comment);
  }

  update(comment): Observable<CommentInterface> {
    return this.http.put<any>(`${this.API_URL}/${comment.id}`, comment);
  }

  delete(commentId): any {
    return this.http.delete(`${this.API_URL}/${commentId}`);
  }
}
