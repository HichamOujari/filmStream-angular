import { Component, OnInit } from '@angular/core';
import { FilmService } from "../services/film.service";
import { Film } from "../models/film";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film;
  constructor(public service: FilmService, private route: ActivatedRoute) {
    this.service.getFilmById(this.route.params["_value"]["idmovie"])
      .subscribe(rsp => {
        this.film = rsp as Film;
        document.title = ""+rsp["title"]
      })
  }

  ngOnInit(): void {

  }

}
