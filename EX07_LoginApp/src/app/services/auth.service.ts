import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  // private url = '/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyAF4sQnbjYoW16CB05rQ-hnc8hmaiRGX9w';
  // sign up new users
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  // sign in user
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  userToken: string;

  constructor( private http: HttpClient) {
    this.reedToken();
   }

  logout() {
    localStorage.removeItem('token');
  }

  login( user: UsuarioModel) {

    const authData = {
      ...user,
      returnSecureToken: true
    };
    console.log(authData);
    return this.http.post(
      `${this.url}/verifyPassword?key=${this.apikey}` ,
      authData
      );

  }

  NewUser(user: UsuarioModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    };
    console.log(authData);
    return this.http.post(
      `${this.url}/signupNewUser?key=${this.apikey}` ,
      authData
      ).pipe(
        map( resp => {
          console.log('inside map rxjs');
          // tslint:disable-next-line: no-string-literal
          this.saveToken( resp['idToken']);
          return resp;
        })
      );
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let today = new Date();
    today.setSeconds(3600);
    localStorage.setItem('expired' , today.getTime().toString() );
    
  }

  private reedToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuth(): boolean{
    if (this.userToken.length < 2) { return false; }

    const expired = Number(localStorage.getItem('expired'));
    const expiredDate = new Date();
    expiredDate.setTime(expired);
    if (expiredDate > new Date()){
      return true;
    }else{
      return false;
    }
    return this.userToken.length > 2;
  }
}
