import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop , moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: any = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( c => {
      this.countries = c ;
      console.log( this.countries );
    });
  }

  drop( event: CdkDragDrop <any> ) {
   console.log('OK!' , event );
   moveItemInArray(this.countries,
    event.previousIndex , event.currentIndex);

  }

}
