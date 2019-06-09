import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'ttps://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyAF4sQnbjYoW16CB05rQ-hnc8hmaiRGX9w';
  // sign up new users
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  //sign in user
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor() { }

  logout(user:UsuarioModel){
    
  }
  
  login( user:UsuarioModel){

  }
}
