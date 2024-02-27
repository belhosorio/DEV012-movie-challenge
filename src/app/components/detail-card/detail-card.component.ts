import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/interface';
import { DataService } from 'src/app/lib/data.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() detailCard: any;
  imgDetail:boolean = true;

  constructor(
    public _dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

}
