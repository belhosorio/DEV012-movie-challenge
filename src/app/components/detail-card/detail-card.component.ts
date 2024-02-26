import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/interface';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() detailCard: any;
  imgDetail:boolean = true;

  constructor() {
    console.log('Constructor - detailCard:', this.detailCard);
  }

  ngOnInit(): void {
    console.log(this.detailCard)
  }

}
