import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from './services/album.service';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [CommonModule, AlbumsRoutingModule, HttpClientModule],
  providers: [AlbumService],
})
export class AlbumsModule {}
