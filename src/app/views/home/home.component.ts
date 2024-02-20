import { Component, OnInit } from '@angular/core';
import { DataService } from '../../lib/data.service';
import { Cards } from '../../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  cardsMovie: Cards[] =[]
  indexPage: number = 1;
  idGenre : number | null = null;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getData(this.indexPage);
  }

// data por defecto
  getData(page:number): void {
    this._dataService.getAllCards(page).subscribe(
      (resp) => (this.cardsMovie = resp.results),
    );
  }
//data cuando se seleciona un genero
  getGenre(page:number, genre_ids: number): void {
    this._dataService.getWithGenre(page, genre_ids).subscribe(
      (resp) => (this.cardsMovie = resp.results),
    );
  }

    cambiarPagina(page: number) {
      this.indexPage = page;
      this.getData(page);
      
    }

    genreBtn(e: number | null, page: number) {
      if (e !== null) {
        this.getGenre(page, e);
      } else {
        this.getData(page);
      }
    }
}
 

