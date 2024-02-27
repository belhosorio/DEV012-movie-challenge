import { Component, Input} from '@angular/core';
import { Cards } from '../../interface';
import { Router } from '@angular/router';
import { DataService } from 'src/app/lib/data.service';
// import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
 @Input() cardsMovie: Cards[] = [];
nameGenre: string | null ='';

 constructor(
  private router:Router,
  public _dataService: DataService
 ){

 }
 goToDetail(id:number){
 this.router.navigate(["/movieDetail", id
 ])
 }

}
