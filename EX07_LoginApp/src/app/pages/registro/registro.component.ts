import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UsuarioModel;

  constructor( private auth: AuthService ) { }

  ngOnInit() {
    this.user = new UsuarioModel();
    this.user.email = 'sparanzza@gmail.com';

  }

  onSubmit( form : NgForm ){

    if (form.invalid ) { return; }

    this.auth.NewUser(this.user)
    .subscribe( resp => {
      console.log(resp);
    },(err)=>{
      console.log(err.error.error.message);
    }

    );
  }


}
