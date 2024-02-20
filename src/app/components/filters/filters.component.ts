import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() idGenre :number = 0;
  @Input() sortBy: string = "";
  @Output() btnGenre = new EventEmitter<number | null>();
  @Output() btnOrden = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }



  filtradoGenero(e:any){
 this.btnGenre.emit(e.target.value);
  }

  filtradoOrden(e:any){
    this.btnOrden.emit(e.target.value);
  }

}
