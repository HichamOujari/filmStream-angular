import { Component, OnInit,Input } from '@angular/core';
import {FilmService} from "../services/film.service";

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {
  

  @Input() filmData;
  filmService:FilmService;
  constructor(private service:FilmService) {
    this.filmService = service;
    //console.log(this.filmData.poster_path)
    //this.imagePath = filmService.getImage(this.filmData.poster_path)
  }
  ngOnInit(): void {
  }
  showDetail(){
    alert(this.filmData.decription)
  }
}
