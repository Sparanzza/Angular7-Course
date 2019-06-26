import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {}; 
  tracks: any = {};
  loading: boolean = true; 
  loadingTrack: boolean = true; 

  constructor( 
      private activatedRoute : ActivatedRoute,
      private spotifyService : SpotifyService
    ) {

    this.activatedRoute.params.subscribe( params =>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);

    })
   }

  ngOnInit() {
  }

  getArtist( id ){
    this.spotifyService.getArtist( id ).subscribe( artist =>{
      console.log(artist);
      this.artist = artist;
      this.loading =false;
    });
  }
  getTopTracks( id ){

    this.spotifyService.getTopTracks( id ).subscribe( tracks =>{
      console.log(tracks);
      this.tracks = tracks;
      this.loadingTrack =false;
    });
  }
}