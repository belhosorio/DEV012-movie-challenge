import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cards } from '../interface'; 
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

  getAllCards(page:number, sort_by: string): Observable<{ results: Cards[] }> {
    return this.http.get<{ results: Cards[] }>(`${this.dataUrl}discover/movie?page=${page}&sort_by=${sort_by}`, { headers: this.dataHeaders }).pipe(
      map((resp) => resp)
    );
  }
  getWithGenre(page:number, genre_ids:number, sort_by: string): Observable<{ results: Cards[] }> {
    return this.http.get<{ results: Cards[] }>(`${this.dataUrl}discover/movie?page=${page}&sort_by=${sort_by}&with_genres=${genre_ids}`, { headers: this.dataHeaders }).pipe(
      map((resp) => resp)
    );
  }
  getDetail(id:number): Observable<Cards>{
  return this.http.get<Cards>(`${this.dataUrl}/movie/${id}?language=en-US`, { headers: this.dataHeaders }).pipe(
    map((resp) => resp)
  );
}
}