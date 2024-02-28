import { Component, Input, OnInit } from '@angular/core';
import { Detail, Genre } from 'src/app/interface';
import { DataService } from 'src/app/lib/data.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() detailCard: any; 
  genreNames: Genre[] = []; 

  constructor(
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
   
  }
  getGenresName(): string {
    if (this.detailCard && this.detailCard.genres) {
      return this.detailCard.genres.map((genre: { name: any; }) => genre.name).join(', ');
    } else {
      return '';
    }
  }
}

 
