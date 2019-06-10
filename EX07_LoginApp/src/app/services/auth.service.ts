import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'ttps://www.googleapis.com/identitytoolkit/v3/relyingparty';
  // private url = '/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyAF4sQnbjYoW16CB05rQ-hnc8hmaiRGX9w';
  // sign up new users
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  // sign in user
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor( private http: HttpClient) { }

  logout(user: UsuarioModel){
    
  }
  
  login( user: UsuarioModel){

  }
  
  NewUser(user: UsuarioModel){
    const authData = {
      ...user,
      returnSecureToken: true
    };
    console.log(authData);
    return this.http.post(
      `${this.url}/signupNewUser?key=${this.apikey}` ,
      authData
      );
  }
}
