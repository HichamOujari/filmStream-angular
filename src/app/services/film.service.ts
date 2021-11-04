import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Film } from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  API_TOKEN: any = "363cc63dd412c6fbbd34ded9d856afe1";

  films:Array<any> = [];
  filmSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllFilms(page: number) {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN + '&language=fr&page=' + page
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }

  emitFilmsSubject(){
    this.filmSubject.next(this.films)
  }

  getFilmById(id) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr';
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }
  getFilms(text: String, page: number) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }

  getImage(name: String) {
    return 'https://image.tmdb.org/t/p/w300' + name;
  }
}
