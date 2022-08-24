import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WOMAN_COLLECTION, WOMAN_FIRST_PAGE } from 'src/app/constants';

@Component({
  selector: 'app-woman-collection',
  templateUrl: './woman-collection.component.html',
  styleUrls: ['./woman-collection.component.scss']
})
export class WomanCollectionComponent implements OnInit {
  womanCollection: any = WOMAN_COLLECTION;
  womanFirstPage: any = WOMAN_FIRST_PAGE;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToHomepage() {
    this._router.navigateByUrl("");
  }
}
