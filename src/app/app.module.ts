import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailComponent } from './views/movieDetail/movieDetail.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardsComponent } from './components/cards/cards.component';
import { MyCustomPaginatorIntl } from './paginator-es';
import { PaginatorComponent } from './components/paginator/paginator.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MovieDetailComponent,
    FiltersComponent,
    LogoComponent,
    CardsComponent,
    PaginatorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MyCustomPaginatorIntl,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
