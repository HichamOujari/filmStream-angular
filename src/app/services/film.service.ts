import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Film } from "../models/film";
import { Revue } from "../models/revue";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  API_TOKEN: any = "363cc63dd412c6fbbd34ded9d856afe1";
  url = "https://moviestream-2f6d0-default-rtdb.firebaseio.com/movie.json";
  films:Array<any> = [];
  filmSubject = new Subject<any>();


  filmsFavoris:Array<any> = [];
  filmFavorisSubject = new Subject<any>();

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

  emitFilmsFavorisSubject(){
    this.filmFavorisSubject.next(this.filmsFavoris)
  }

  getFilmById(id) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr';
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }

  getVideoById(id){
    const url = 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=' + this.API_TOKEN + '&language=fr';
    return this.http.get(url)
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

  addFavoris(film:Film) {
    this.http.post<Film>(this.url,film).subscribe(rsp=>console.log(rsp))
  }

  deleteFavoris(film:Film) {
    //this.http.delete<Film>(this.url,film).subscribe(rsp=>console.log(rsp))
  }


  addrevue(revue:Revue){
    const url = "http://localhost:3001/revues"
    return this.http.post(url,revue)
  }

  getAllRevues(id:number){
    const url = "http://localhost:3001/revues/"+id
    return this.http.get<Array<Revue>>(url)
  }

  getAllFavoris() {
    this.http.get<Array<Film>>(this.url).subscribe(rsp=>{
      this.filmsFavoris = rsp;
      this.emitFilmsFavorisSubject()
    })
  }

}
