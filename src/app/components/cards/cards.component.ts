import { Component, Input, Output } from '@angular/core';
import { Cards } from '../../interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
 @Input() cardsMovie: Cards[] = [];
}
