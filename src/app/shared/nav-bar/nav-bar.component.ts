import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchedText = ""
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((rsp) => {
      var name = rsp["name"];
      if (name !== undefined) this.searchedText = name;
      else this.searchedText = ""
    })
  }

  setSearch(val: String) {
    this.router.navigate([''], {
      relativeTo: this.route,
      queryParams: {
        name: val
      },
      replaceUrl:true,
      queryParamsHandling: 'merge'
    })
  }
}
