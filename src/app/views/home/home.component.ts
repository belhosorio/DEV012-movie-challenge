import { Component, OnInit } from '@angular/core';
import { DataService } from '../../lib/data.service';
import { Cards } from '../../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // cardsGenre: Genre = { genres: [] };
  cardsMovie: Cards[] =[]
  indexPage: number = 1;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getData(this.indexPage);
  }

  getData(page: number): void {
    this._dataService.getAllCards(page).subscribe(
      (resp) => (this.cardsMovie = resp.results),

    );
  }

  cambiarPagina(page: number) {
    this.getData(page);
    this.indexPage = page;
  }
}

   // getGenre(): void {
  //   this._dataService.getCardsGenre().subscribe(
  //     (resp: Genre) => {
  //       this.cardsGenre = resp;
  //     },
  //   );
  // }
