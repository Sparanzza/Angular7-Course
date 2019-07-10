import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {

  pelicula: any;
  regresarA: string;
  text: string;

  constructor(
    private _route: ActivatedRoute,
    private _ps: PeliculasService) {
    this._route.params.subscribe( params => {
      this.regresarA = params['page'];
      if ( params['text']) {
        this.text = params['text'];
      }
      this._ps.getfilm( params['id']).subscribe( data => {
        console.log( data );
        this.pelicula = data;
      });
    });
  }

  ngOnInit() {
  }

}
