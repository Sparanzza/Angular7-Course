import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel();
  remenberMe = false;

  constructor(private auth: AuthService,
              private router: Router ) { }

  ngOnInit() { 
    if(this.remenberMe){
      this.user.email = localStorage.getItem('email');
      this.remenberMe = true;
    }
  }

  login(form: NgForm) {

    if ( form.invalid ) {return; }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Wait please...'
    });

    Swal.showLoading();

    this.auth.login(this.user).subscribe(
      (resp) => {
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
      });
  }

}
