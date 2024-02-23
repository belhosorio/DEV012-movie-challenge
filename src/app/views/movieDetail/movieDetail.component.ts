import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cards } from 'src/app/interface';
import { DataService } from 'src/app/lib/data.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  idParams : number| null = null;
  detailCard: Cards| null = null ;

  constructor(
    private ruta:ActivatedRoute,
    private _dataService: DataService) {}

  
  ngOnInit(): void {
this.idParams = this.ruta.snapshot.params["id"]
console.log(this.ruta.snapshot.params["id"])
if(this.idParams != null){
  this._dataService.getDetail(this.idParams).subscribe( resp =>{
    this.detailCard = resp;
})
}}

}
