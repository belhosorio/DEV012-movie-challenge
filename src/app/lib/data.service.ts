import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cards } from '../interface'; 
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

  getAllCards(): Observable<{ results: Cards[]; total_results: number }> {
    return this.http.get<{ results: Cards[]; total_results: number }>(this.dataUrl, { headers: this.dataHeaders });
  }

  getCardsPage(page: number, pageSize: number): Observable<{ results: Cards[] }> {
    const url = `${this.dataUrl}?page=${page}&pageSize=${pageSize}`;
    return this.http.get<{ results: Cards[] }>(url, { headers: this.dataHeaders });
  }
}