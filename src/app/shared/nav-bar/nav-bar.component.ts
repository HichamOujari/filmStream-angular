import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() searchText = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  setSearch(val: String){
    this.searchText.emit(val);
  }

}
