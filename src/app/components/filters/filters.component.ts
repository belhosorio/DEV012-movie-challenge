import { Component, EventEmitter, Input, OnInit, Output,  ViewChild  } from '@angular/core';

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
  @Output() btnLimpiar = new EventEmitter<any>();
  @ViewChild('generoSelect') generoSelect: any;
  @ViewChild('ordenSelect') ordenSelect: any;

  constructor() { }

  ngOnInit(): void {
  }



  filtradoGenero(e:any){
 this.btnGenre.emit(e.target.value);
  }

  filtradoOrden(e:any){
    this.btnOrden.emit(e.target.value);
  }

  borrar($event: any) {
    this.btnGenre.emit(null);
    this.btnOrden.emit('');

    // Restablecer los select
    if (this.generoSelect) {
      this.generoSelect.nativeElement.selectedIndex = 0;
    }
    if (this.ordenSelect) {
      this.ordenSelect.nativeElement.selectedIndex = 0;
    }

    this.btnLimpiar.emit($event);
  }
}

