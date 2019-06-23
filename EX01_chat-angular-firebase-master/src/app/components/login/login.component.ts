import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor( public _cs: ChatService) { }

  ngOnInit() {
  }

  ingresar( proveedor: string ) {
    console.log(proveedor);
    this._cs.login( proveedor );

  }

}
