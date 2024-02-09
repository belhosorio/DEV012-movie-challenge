import { OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Cards } from '../../interface';
import { DataService } from 'src/app/lib/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})

export class PaginatorComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 20;
  cardsMovie: Cards[] = [];
  currentPage: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.updateData();
  }

  updateData(): void {
    this.dataService.getCardsPage(this.currentPage, this.pageSize).subscribe(
      (resp) => {
        this.cardsMovie = resp.results;
      }
    );
  }

  cambiarPagina(e: PageEvent): void {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.updateData();
  }
}