import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  API_URL = 'http://bdo-api.azurewebsites.net/api/posts';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.API_URL);
  }

  addPost(post) {
    return this.http.post(this.API_URL, post);
  }

  getPost(postId) {
    return this.http.get(`${this.API_URL}/${postId}`);
  }

  updatePost(post) {
    return this.http.put(`${this.API_URL}/${post.id}`, {});
  }
}
