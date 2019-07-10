import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmsPipe'
})
export class FilmsPipePipe implements PipeTransform {

  transform( film: any  , poster: boolean = false): any {
    const url = 'http://image.tmdb.org/t/p/w500';
      if (poster) {
        return url + film.poster_path;
      }
    if (film.backdrop_path) {
      return url + film.backdrop_path;
    }
    if (film.poster_path) {
      return url + film.poster_path;
    } else {
      return 'assets/no-image.png';
    }
  }
}
