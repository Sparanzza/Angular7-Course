import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-items';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {
  items: Observable<any[]>;

  private folderImg = 'img';

  constructor( public db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }


  public loadImagefromFirebase ( imgs: FileItem[] ) {
    const storageRef = firebase.storage().ref();

    for (const item of imgs) {
      item.isUploading = true;

      if (item.progress >= 100 ) {
        continue;
      }

      const updloadTask: firebase.storage.UploadTask =
      storageRef.child(`/${this.folderImg}/${item.name}`).put(item.file);
      updloadTask.on(firebase.storage.TaskEvent.STATE_CHANGED ,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progress =
        ( snapshot.bytesTransferred / snapshot.totalBytes  ) * 100,
        (error) => console.error('error to upload to firebase'),
        () => {
          console.log('image loaded!');
          updloadTask.snapshot.ref.getDownloadURL().then(
            (downloadURL) => {
              item.url = downloadURL;
              console.log(item.url); console.log(item.name);
              this.saveImage({
                name : item.name,
                url: item.url
              });
              item.isUploading = false;
            }
          );
        });

      }
    }

    private saveImage( image: { name: string , url: string }) {
      this.db.collection(`/${this.folderImg}`).add( image );
    }
  }
