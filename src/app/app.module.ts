import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { FilmComponentComponent } from './film-component/film-component.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavorisComponent } from './favoris/favoris.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:idmovie', component: DetailFilmComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo:"not-found" },
];

@NgModule({

  declarations: [
    AppComponent,
    FilmViewComponent,
    FilmComponentComponent,
    NavBarComponent,
    DetailFilmComponent,
    HomeComponent,
    FavorisComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
