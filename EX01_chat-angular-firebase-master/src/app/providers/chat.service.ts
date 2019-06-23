import { MensajeInterface } from './../interfaces/mensaje.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private itemsCollection: AngularFirestoreCollection<MensajeInterface>;
  public chats: MensajeInterface[]  = [];
  public _user: any = {};

    constructor(
      public afAuth: AngularFireAuth,
      private afs: AngularFirestore) {
        this.afAuth.authState.subscribe( user => {
          console.log( 'Extado del usuario ' ,  user);
          if ( !user ) {
            return;
          }
          this._user.nombre = user.displayName;
          this._user.uid = user.uid;
        });
      }

  login( provider: string ) {
    if ( provider === 'Google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  logout() {
    this._user = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<MensajeInterface>( 'chats' , (ref) =>
      ref.orderBy('fecha' , 'desc').limit(10) );
    // https://es.stackoverflow.com/questions/168279/la-propiedad-map-no-existe-en-el-tipo-observableuser
    return this.itemsCollection.valueChanges()
    .pipe(
       map( mensajes => {
        this.chats = [];

        for ( const  mensaje of mensajes) {
          this.chats.unshift( mensaje) ;
        }
        return this.chats;
       } )
    );
  }

  agregarMensaje( texto: string ) {

    // FALTA UID
    const mensaje: MensajeInterface = {
      nombre: this._user.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this._user.uid,
    };
    return this.itemsCollection.add( mensaje );
  }


}
