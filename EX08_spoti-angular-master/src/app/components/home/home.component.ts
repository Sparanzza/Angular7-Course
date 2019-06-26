import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  newSongs: any[] = [];
  error: boolean = false;
  errorMessage: string;

  constructor( private spotifyService : SpotifyService ) {
    //todo loading
    spotifyService.getReleases()
        .subscribe( (data : any) => {
          console.log(data);
          this.newSongs = data;
          this.loading = false;
      }, ( serviceError) =>{
        console.log(serviceError);
        this.error = true;
        this.loading = false;
        this.errorMessage = serviceError.error.error.message;
      });
  }

  ngOnInit() {
  }

}
