import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private playlist = 'UUKHsXi0fY-mvLAAnLq95PPQ';
  private apikey = 'AIzaSyDlvWAKVpayJLu9kQWx8qvwmGxhZlRUChk';
  private nextPageToken = '';

  constructor( public http: HttpClient) {

  }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = {
      'part': 'snippet',
      'maxResults': '10',
      'playlistId': this.playlist,
      'key': this.apikey
    };
    if ( this.nextPageToken) {
      params['pageToken'] = this.nextPageToken;
    }
    return this.http.get(url , { params }).pipe(
      map( res => {
        this.nextPageToken = res['nextPageToken'];
        const videos: any[] = [];
        for ( const video of res['items']) {
          videos.push(video['snippet']);
        }
        return videos;
      } ));
  }
}
