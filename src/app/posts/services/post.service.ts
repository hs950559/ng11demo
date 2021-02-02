import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  API_URL = 'http://bdo-api.azurewebsites.net/api/posts/';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.API_URL);
  }
}
