import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder , FormGroup } from '@angular/forms';



@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.scss']
})
export class EditMapComponent implements OnInit {

  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      this.form = fb.group({
        'title': data.title,
        'desc' : data.desc
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {
    // tslint:disable-next-line:no-unused-expression
    this.form.value;
    this.dialogRef.close(this.form.value);

  }


  ngOnInit() {
  }

}
