import { Component, Input, OnInit } from '@angular/core';
import { Cards } from 'src/app/interface';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() detailCard: Cards| null = null;

  constructor() {
    console.log('Constructor - detailCard:', this.detailCard);
  }

  ngOnInit(): void {
    console.log(this.detailCard)
  }

}
