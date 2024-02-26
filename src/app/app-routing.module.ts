import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailComponent } from './views/movieDetail/movieDetail.component';

const routes: Routes = [
  
  {path: '', redirectTo:"/home", pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'movieDetail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
