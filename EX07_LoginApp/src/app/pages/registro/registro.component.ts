import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.user = new UsuarioModel();
    this.user.email = 'sparanzza@gmail.com';

  }

  onSubmit( form : NgForm ){

    if (form.invalid ) { return; }
    console.log("form sendit");
    console.log(this.user);
    console.log(form);
  }


}
