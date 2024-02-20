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
  sortBy: string = "";

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getData(this.indexPage, this.sortBy);
  }

// data por defecto(trae por defecto la pagina 1 y mayor popularidad)
  getData(page:number, sort_by:string): void {
    this._dataService.getAllCards(page, sort_by).subscribe(
      (resp) => (this.cardsMovie = resp.results),
    );
  }
//data cuando se seleciona un genero
  getGenre(page:number, genre_ids: number, sort_by:string): void {
    this._dataService.getWithGenre(page, genre_ids, sort_by).subscribe(
      (resp) => (this.cardsMovie = resp.results),
    );
  }

//el genero funciona con la paginacion y el ordenamiento
  genreBtn(genre_ids: number | null, page: number, sort_by: string) {
    this.idGenre = genre_ids;
    if (genre_ids !== null) {
      this.getGenre(page, genre_ids, sort_by);
    }
  }

//el ordenamiento funciona con la paginacion y con el genero
ordenBtn(sort_by: string, page: number, genre_ids?: number | null) {
  this.sortBy = sort_by;
  if (genre_ids !== undefined && genre_ids !== null) {
    this.getGenre(page, genre_ids, sort_by);
  } else {
    this.getData(page, sort_by);
  }
}

//la paginacion funciona con el ordenamiento y genero
cambiarPagina(page: number, sort_by: string, genre_ids?: number | null) {
  this.indexPage = page;
  if (genre_ids !== undefined && genre_ids !== null) {
    this.getGenre(page, genre_ids, sort_by);
  } else {
    this.getData(page, sort_by);
  }
}



}
 

