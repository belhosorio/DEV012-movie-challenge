import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cards, Detail, Genre } from '../interface'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private dataUrl = 'https://api.themoviedb.org/3/';
  private dataHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzA1NDhhOTRiYmRjODU3Y2QwYmFhMGRlZmRhMDJkMiIsInN1YiI6IjY1YjI4ZDBkYzE0NGRkMDE2MzY3Y2E2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jecToDc_pBI1ZZwmn0gn51aIzKxvwBZDUf7llS5CXTA',
  });

  constructor(private http: HttpClient) {}

//peticion de peliculas con parametros page y sort_by
  getAllCards(page:number, sort_by: string): Observable<{ results: Cards[] }> {
    return this.http.get<{ results: Cards[] }>(`${this.dataUrl}discover/movie?include_adult=false&include_video=false&language=es-MX&page=${page}&sort_by=${sort_by}`, { headers: this.dataHeaders }).pipe(
      map((resp) => resp)
    );
  }

  //peticion de peliculas por genero con parametros page y sort_by
  getWithGenre(page:number, genre_ids:number, sort_by: string): Observable<{ results: Cards[] }> {
    return this.http.get<{ results: Cards[] }>(`${this.dataUrl}discover/movie?include_adult=false&include_video=false&language=es-MX&page=${page}&sort_by=${sort_by}&with_genres=${genre_ids}`, { headers: this.dataHeaders }).pipe(
      map((resp) => resp)
    );
  }

  //peticion de peliculas en detalle
  getDetail(id:number): Observable<Detail>{
  return this.http.get<Detail>(`${this.dataUrl}/movie/${id}?language=es-MX`, { headers: this.dataHeaders }).pipe(
    map((resp) => resp)
  );
}



}