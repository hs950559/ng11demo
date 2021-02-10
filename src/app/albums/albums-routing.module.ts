import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditAlbumComponent } from './components/add-edit-album/add-edit-album.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    children: [
      {
        path: 'new',
        component: AddEditAlbumComponent,
      },
      {
        path: ':id/edit',
        component: AddEditAlbumComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
