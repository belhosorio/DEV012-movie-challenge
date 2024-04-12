import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/interface';
import { DataService } from 'src/app/lib/data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-moviedetail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  idParams : number| null = null;
  detailCard: Detail| null = null ;
  // indexPage: number = 1;

  constructor(
    private ruta:ActivatedRoute,
    private _dataService: DataService,
    private router:Router,
    private location: Location) {}

  
  ngOnInit(): void {
this.idParams = this.ruta.snapshot.params["id"]
console.log(this.ruta.snapshot.params["id"])
if(this.idParams != null){
  this._dataService.getDetail(this.idParams).subscribe( resp =>{
    this.detailCard = resp;
})
}}

goBack(){
  this.location.back();
}
}

// this.router.navigate(["/home"]);