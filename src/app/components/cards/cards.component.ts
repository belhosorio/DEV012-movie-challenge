import { Component, Input} from '@angular/core';
import { Cards, Genre } from '../../interface';
import { Router } from '@angular/router';
import { DataService } from 'src/app/lib/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
 @Input() cardsMovie: Cards[] = [];
//  genreNames: Genre[] = []; 

 constructor(
  private router:Router,
  private _dataService: DataService
 ){

 }
 goToDetail(id:number){
 this.router.navigate(["/movieDetail", id
 ])
 }

}
