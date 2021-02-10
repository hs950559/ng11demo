import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from './services/album.service';
import { AddEditAlbumComponent } from './components/add-edit-album/add-edit-album.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlbumsComponent, AddEditAlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AlbumService],
})
export class AlbumsModule {}
