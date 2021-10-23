import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Film} from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  API_TOKEN :any= "363cc63dd412c6fbbd34ded9d856afe1";
  
  constructor(private http:HttpClient) { }

  getAllFilms(page:number){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN +'&language=fr&page=' + page
    return this.http.get<Array<Film>>(url).toPromise()
        .then((rsp)=>rsp)
        .catch((err)=>console.log(err));
  }

  getFilms(text:String,page:number){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.API_TOKEN +'&language=fr&query=' + text + "&page=" + page
    return this.http.get<Array<Film>>(url).toPromise()
        .then((rsp)=>rsp)
        .catch((err)=>console.log(err));
  }

  getImage(name:String){
    return 'https://image.tmdb.org/t/p/w300' +name;
  }
}
