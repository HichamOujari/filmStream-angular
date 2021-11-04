import { Component, OnInit } from '@angular/core';
import { FilmService } from "../services/film.service";
import { Film } from "../models/film";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film;
  filmsSubscription: Subscription = new Subscription();

  constructor(public service: FilmService, private route: ActivatedRoute) {
    this.service.getFilmById(this.route.params["_value"]["idmovie"])
    this.filmsSubscription = this.service.filmSubject.subscribe(rsp => {
        this.film = rsp as Film;
        document.title = ""+rsp["title"]
    })
    this.service.emitFilmsSubject()
  }

  ngOnInit(): void {

  }

}
