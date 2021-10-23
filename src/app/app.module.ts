import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { FilmComponentComponent } from './film-component/film-component.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  
  declarations: [
    AppComponent,
    FilmViewComponent,
    FilmComponentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
