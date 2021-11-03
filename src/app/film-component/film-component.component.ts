import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from "../services/film.service";
import { Router } from '@angular/router';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {


  @Input() filmData;
  filmService: FilmService;
  constructor(private service: FilmService) {
    this.filmService = service;
  }
  ngOnInit(): void {
  }
}
