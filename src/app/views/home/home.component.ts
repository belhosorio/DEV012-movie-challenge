import { Component, OnInit } from '@angular/core';
import { DataService } from '../../lib/data.service';
import { Cards } from '../../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardsMovie: Cards[] = [];
  totalItems = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getAllCards().subscribe(
      (resp) => {
        this.cardsMovie = resp.results;
        this.totalItems = resp.total_results;
      }
    );
  }
}