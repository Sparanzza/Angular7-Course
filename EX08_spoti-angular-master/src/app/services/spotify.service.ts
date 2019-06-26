

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('spotify service ready!');
   }

   getQuery( query :string){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDjfRM0YpqE7v-w7O20bvZ3cYzM98MNk5EWsmzohrmGYW44IvOAcK6GHcyJwcYbePHYk2DRiChQnzDEMqg'
    })
    console.log(url);
    return this.http.get( url, { headers });
   }

   getReleases(){
      return this.getQuery('browse/new-releases')
          .pipe( map( data => data['albums'].items ) );

  }
  getArtists(artist: string){
    return this.getQuery(`search?q=${ artist }&type=artist&limit=50`)
                  .pipe( map( data=>  data['artists'].items ));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data=>  data['tracks'] ));
    
  }

}
