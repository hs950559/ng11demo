import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-add-edit-album',
  templateUrl: './add-edit-album.component.html',
  styleUrls: ['./add-edit-album.component.scss'],
})
export class AddEditAlbumComponent implements OnInit, OnDestroy {
  form: FormGroup;
  editing = false;
  addEditSub: Subscription;
  routeSub: Subscription;
  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues() {
    this.form = this.fb.group({
      userId: [''],
      title: [''],
    });
  }

  fetchData() {
    this.routeSub = this.route.paramMap.subscribe((paramObj: any) => {
      const albumId = paramObj.params.id;
      if (albumId) {
        this.editing = true;

        const album: any = this.location.getState();

        if (album.id) {
          this.form.patchValue(album);
        } else {
          this.albumService.getAlbum(albumId).subscribe((res) => {
            this.form.patchValue(res);
          });
        }
      } else {
        this.editing = false;
      }
    });
  }

  addEditPost(val) {
    const albumId = this.route.snapshot.paramMap.get('id');

    if (albumId) {
      this.addEditSub = this.albumService
        .updateAlbum(albumId, val)
        .subscribe((resAlbum) => {
          this.router.navigateByUrl('/albums', { state: resAlbum });
        });
    } else {
      this.addEditSub = this.albumService
        .addAlbum(val)
        .subscribe((resAlbum) => {
          this.router.navigateByUrl('/albums', {
            state: { ...resAlbum, add: true },
          });
        });
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.addEditSub && this.addEditSub.unsubscribe();
  }
}
