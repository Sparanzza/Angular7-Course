import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UsuarioModel;
  remenberMe = false;
  constructor(private auth: AuthService ,
              private router: Router ) { }

  ngOnInit() {
    this.user = new UsuarioModel();
    this.user.email = 'sparanzza@gmail.com';

  }

  onSubmit( form: NgForm ) {

    if (form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Wait please...'
    });

    this.auth.NewUser(this.user)
    .subscribe( resp => {
      console.log(resp);
      Swal.close();
      if(this.remenberMe){
        localStorage.setItem('email', this.user.email);
      }
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        title: 'Error in Auth',
        text: err.error.error.message
      });
    }

    );
  }


}
