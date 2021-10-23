import { Component } from '@angular/core';
import {Film} from "./models/film";
import {FilmService} from "./services/film.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IQL Student';
  
  searchedText:String = "";
  films:Array<Film> = [];
  filmService:FilmService;

  constructor(private service:FilmService){
    this.filmService=service;
    this.filmService.getAllFilms(1)
    .then(rsp=>{
      this.films = rsp["results"];
    })
  }

  searchText(searchedText){
    this.filmService.getFilms(searchedText,1).then(rsp=>{
      this.films = rsp["results"];
    })
  }
}
