import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  buscarPelicula( texto: string) {
    if ( texto.length === 0) {
      return;
    }
    console.log( texto );
    this._router.navigate(['search' , texto]);


  }

}
