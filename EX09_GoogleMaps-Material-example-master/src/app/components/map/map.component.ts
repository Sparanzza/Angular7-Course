import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditMapComponent } from './edit-map.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  markers: Marker[] = [];
  lat  = 51.678418;
  lng = 7.809007;
  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));

    }
    const newMarker = new Marker (51.678418 , 7.809007);
    this.markers.push(newMarker);
  }

  ngOnInit() {
  }
  mapClick( e: any) {
    console.log(e);
    const newMarker = new Marker (e.coords.lat , e.coords.lng);
    this.markers.push( newMarker);
    console.log('saveStorage');
    this.saveStorage();
    this.snackBar.open('Created Marker' , 'Close' , { duration : 1000});

  }

  saveStorage() {
    localStorage.setItem('markers' , JSON.stringify(this.markers));
  }

  deleteMarker( i: number) {
    console.log( i );
    this.markers.splice( i , 1);
    this.saveStorage();
    this.snackBar.open('Delete Marker', 'Close' , {duration : 1000 });
  }

  editMarker( marker: Marker) {
    const dialogRef = this.dialog.open(EditMapComponent, {
      height: '250px',
      width: '400px',
      data: { title: marker.title , desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (!result) {
        return;
      }
      marker.title = result['title'];
      marker.desc = result['desc'];
      this.snackBar.open('Edited Marker' , 'Close' , { duration : 1000});
    });
  }
}
