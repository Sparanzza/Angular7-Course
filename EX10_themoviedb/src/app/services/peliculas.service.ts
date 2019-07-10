import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = '51da087bbabae94f786facda05d7db45';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  peliculas: any[]  = [];

  constructor(private http: HttpClient) {}

  getfilm( id: string) {
    const url = `${
      this.urlMoviedb
    }/movie/${id}?api_key=${
      this.apikey
    }&language=es`;
    return this.http.get(url).pipe(
      map( (res: any) => {
        return res;
      })
    );
  }
  getPopulares() {
    const url = `${
      this.urlMoviedb
    }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es`;
    return this.http.get(url).pipe(
      map( (res: any) => {
        console.log(res);
        return res.results;
      })
    );
  }

  getPopularesNinos() {
    const url = `${
      this.urlMoviedb
    }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es`;
    return this.http.get(url).pipe(
      map( (res: any) => {
        console.log(res);
        return res.results;
      })
    );
  }

  buscarPelicula(texto: string) {
    const url = `${
      this.urlMoviedb
    }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es`;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log(res);
        this.peliculas = res.results;
        return res.results;
      })
    );
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() +
      1}-${desde.getDay()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() +
      1}-${hasta.getDay()}`;

    const url = `${
      this.urlMoviedb
    }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}
                                    &sort_by=popularity.desc&api_key=${
                                      this.apikey
                                    }&language=en`;
    return this.http.get(url).pipe(
      map( (res: any) => {
        console.log(res);
        return res.results;
      })
    );
  }
}
