import { ChatService } from './providers/chat.service';
import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void { }
  constructor( public _cs: ChatService) { }

}
