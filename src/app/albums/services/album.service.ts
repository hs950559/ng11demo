import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
  API_URL = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get(this.API_URL);
  }

  addAlbum(album) {
    return this.http.post(this.API_URL, album);
  }

  getAlbum(id) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  updateAlbum(id, album) {
    return this.http.put(`${this.API_URL}/${id}`, album);
  }

  deleteAlbum(id) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
