import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cards } from '../interface'; //declaraciones de interface
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

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


