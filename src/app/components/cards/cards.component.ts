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
 imgMovie: boolean = true;


 constructor(
  private router:Router,
  private _dataService: DataService
 ){

 }
 goToDetail(id:number){
 this.router.navigate(["/movieDetail", id
 ])
 }

 //para identificar el id con el name de los generos
//  getNameGenre(id: number): Observable<string | undefined> {
//   return this._dataService.getIdGenre(id) // Eliminar argumento sin uso
//     .pipe(
//       map((genres) => genres.find((genre: { id: number; }) => genre.id === id)),
//       map((genre) => genre?.name) // Manejar género potencialmente indefinido
//     );
// }

}
