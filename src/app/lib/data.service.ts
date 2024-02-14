import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cards } from '../interface'; //declaraciones de interface
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// export class DataService {
//   dataUrl = 'https://api.themoviedb.org/3/';
//   apiKEY =
//     '030548a94bbdc857cd0baa0defda02d2'
//   page: number = 1;

//   constructor(private http: HttpClient) {}

//   getAllCards(): Observable<Cards>{
//     const urlPage = `${this.dataUrl}/discover/movie?api_key=${this.apiKEY}&page=${this.page}`
//     return this.http.get<Cards>(urlPage).pipe(map((resp) => resp));
//    }

//   getCardsGenre(): Observable<Genre[]> {
//     return this.http.get<Genre[]>(`${this.dataUrl}/genre/movie/list?api_key=${this.apiKEY}`)
//       .pipe(map((resp) => resp));
//   }

// }

export class DataService {
  private dataUrl = 'https://api.themoviedb.org/3/discover/movie';
  private dataHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzA1NDhhOTRiYmRjODU3Y2QwYmFhMGRlZmRhMDJkMiIsInN1YiI6IjY1YjI4ZDBkYzE0NGRkMDE2MzY3Y2E2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jecToDc_pBI1ZZwmn0gn51aIzKxvwBZDUf7llS5CXTA',
  });

  constructor(private http: HttpClient) {}

  getAllCards(page:number): Observable<{ results: Cards[] }> {
    return this.http.get<{ results: Cards[] }>(`${this.dataUrl}?page=${page}`, { headers: this.dataHeaders }).pipe(
      map((resp) => resp)
    );
  }
}


