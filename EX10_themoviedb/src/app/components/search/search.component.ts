import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pelicula: any;
  buscar: string;
  constructor(
    public _route: ActivatedRoute,
    public  _ps: PeliculasService) {
        this._route.params.subscribe( params => {
          console.log( params);
          if ( params['text']) {
            this.buscar = params['text'];
            this.searchFilm();
          }
        });
     }

  ngOnInit() {
  }

  searchFilm() {
    if ( this.buscar.length === 0 ) {
      return;
    }
    this._ps.buscarPelicula(this.buscar).subscribe( data => {
      console.log( data );
      this.pelicula = data;
    });
   }

}
