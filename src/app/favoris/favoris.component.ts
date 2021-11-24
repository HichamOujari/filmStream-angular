import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/film.service';
import {Subscription}  from "rxjs";
import {Film} from "../models/film";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  films: Array<Film> = [];

  filmsSubscription: Subscription = new Subscription();
  constructor(public service: FilmService) {
    document.title ="Favoris";
    this.service.getAllFavoris();
    this.filmsSubscription = this.service.filmFavorisSubject.subscribe((rsp) => {
      this.films=[];
      for(var i in rsp){
        this.films.push(rsp[i] as Film)
      }
    })
    this.service.emitFilmsFavorisSubject()
  }

  ngOnInit(): void {
  }

}
