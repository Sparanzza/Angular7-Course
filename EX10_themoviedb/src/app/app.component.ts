import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( public _ps: PeliculasService ) {
    // _ps.getPopulares().subscribe( res => console.log(res));
   // _ps.buscarPelicula('wall-e').subscribe( res => console.log(res));
  // _ps.getCartelera().subscribe( res => console.log(res));
  }

}
