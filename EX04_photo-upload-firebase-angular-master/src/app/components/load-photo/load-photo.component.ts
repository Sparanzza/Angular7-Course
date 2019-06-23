import { Component, OnInit } from '@angular/core';

import { FileItem } from '../../models/file-items';
import { LoadImagesService } from 'src/app/services/load-images.service';

@Component({
  selector: 'app-load-photo',
  templateUrl: './load-photo.component.html',
  styles: []
})
export class LoadPhotoComponent implements OnInit {

  isOverDrop = false;
  files: FileItem[] = [];
  constructor( public _loadImage: LoadImagesService) { }

  ngOnInit() {
  }

  loadImage() {
    this._loadImage.loadImagefromFirebase( this.files );
  }

  clean() {
    this.files = [];
  }


}
