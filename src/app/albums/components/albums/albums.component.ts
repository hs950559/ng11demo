import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albumsSub: Subscription;
  albums = [];
  constructor(
    private albumService: AlbumService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.routeChangeListener();
  }

  fetchData() {
    this.albumsSub = this.albumService.getAlbums().subscribe((res: any) => {
      this.albums = res;
    });
  }

  removeAlbum(album) {
    this.albumsSub = this.albumService.deleteAlbum(album.id).subscribe(() => {
      this.albums = this.albums.filter((item) => item.id !== album.id);
    });
  }

  ngOnDestroy() {
    this.albumsSub.unsubscribe();
  }

  routeChangeListener() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const album: any = this.location.getState();

        if (album.id) {
          const albumData = {
            id: album.id,
            userId: album.userId,
            title: album.title,
          };
          if (album.add) {
            this.albums = [albumData, ...this.albums];
            // console.log(event, this.location.getState());
          } else {
            this.albums = this.albums.map((item) =>
              item.id === album.id ? albumData : item
            );
          }
        }
      }
      // update this.homepageData
    });
  }
}
