import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAlbumComponent } from './add-edit-album.component';

describe('AddEditAlbumComponent', () => {
  let component: AddEditAlbumComponent;
  let fixture: ComponentFixture<AddEditAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
