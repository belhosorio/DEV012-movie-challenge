import { Component, Input} from '@angular/core';
import { Cards } from '../../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
 @Input() cardsMovie: Cards[] = [];

 constructor(
  private router:Router
 ){

 }
 goToDetail(id:number){
 this.router.navigate(["/movieDetail", id
 ])
 }

}
