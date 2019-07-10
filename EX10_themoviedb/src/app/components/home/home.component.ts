import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor( private _ps: PeliculasService) {
      _ps.getCartelera().subscribe( data => {
        this.cartelera = data;
      }
    );
    _ps.getPopulares().subscribe( data => {
      this.populares = data;
      }
    );
  _ps.getPopularesNinos().subscribe( data => {
    this.popularesNinos = data;
      }
    );

  }

  ngOnInit() {
  }

}
