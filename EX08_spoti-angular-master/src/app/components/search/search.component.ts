import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists : any[] = [];
  loading : boolean = false;

  constructor(
    private spotifyService: SpotifyService 
  ) { }

  ngOnInit() {
  }

  search( word: string ){
    this.loading =true;
    this.spotifyService.getArtists(word).subscribe( (data: any) =>{
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }

}
