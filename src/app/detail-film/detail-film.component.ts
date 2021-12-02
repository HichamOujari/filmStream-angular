import { Component, OnInit } from '@angular/core';
import { FilmService } from "../services/film.service";
import { Film } from "../models/film";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from "rxjs";
import { Revue } from "../models/revue";
import Cookies from "js-cookie";
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film;
  filmsSubscription: Subscription = new Subscription();
  isFavoris = false;
  urlVideo: SafeResourceUrl = "";

  revues;

  constructor(public service: FilmService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.service.getFilmById(this.route.params["_value"]["idmovie"])
    this.filmsSubscription = this.service.filmSubject.subscribe(rsp => {
      this.film = rsp as Film;
      document.title = "" + rsp["title"]
      this.getVideoUrl()
      this.getAllRevues();
    })
    this.service.emitFilmsSubject()
  }

  getVideoUrl() {
    if (this.film.id != undefined) this.service.getVideoById(this.film.id).subscribe(rsp => {
      console.log("https://www.youtube.com/embed/" + rsp["results"][0]["key"])
      this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + rsp["results"][0]["key"])
    })
  }
  ngOnInit(): void {

  }

  addrevue(detail,rate) {
    var d = new Date();
    if (detail.value.length == 0) {
      alert("il faut ecrire un commentaire")
    } else {
      var date = [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
      this.service.addrevue(new Revue(this.film.id, Cookies.get("email"), date, detail.value,rate.value)).subscribe(rsp => {
        detail.value = ""
        this.getAllRevues();
      })
    }
  }

  getAllRevues() {
    if(this.film.id!=undefined){
      this.service.getAllRevues(this.film.id).subscribe(rsp => {
        this.revues = rsp
      })
    }
  }


  addFavoris() {
    this.isFavoris = true;
    this.service.addFavoris(this.film);
  }

  removeFavoris() {
    this.isFavoris = false;
  }

}
