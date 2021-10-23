import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})

export class FilmViewComponent implements OnInit {

  @Input() films;

  constructor() {

  }

  ngOnInit(): void {
  }
}
