import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() idGenre :number = 0;
  @Output() btnGenre = new EventEmitter<number | null>();

  constructor() { }

  ngOnInit(): void {
  }



  filtradoGenero(e:any){
 this.btnGenre.emit(e.target.value);
  }

  filtradoOrden(){

  }

}
