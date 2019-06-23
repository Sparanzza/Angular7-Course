import { ChatService } from './../../providers/chat.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje = '';

  @ViewChild('chatBox') el: ElementRef;

  constructor(
    private _cs: ChatService
  ) {

    this._cs.cargarMensajes()
            .subscribe( () => {
              setTimeout(() => {
                this.el.nativeElement.scrollTop =
                    this.el.nativeElement.scrollHeight;
              }, 50);
            });
  }

  ngOnInit() { }

  enviarMensaje() {
    console.log( this.mensaje );
    if ( this.mensaje.length === 0 ) {
      return ;
    }

    this._cs.agregarMensaje( this.mensaje ).then( () => {
      console.log('mensaje enviado');
    })
    .catch( () => {
      console.error( 'ERROR: Mensaje no enviado');
    });
    this.mensaje = '';
  }

}
