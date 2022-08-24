import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAN_COLLECTION, MAN_FIRST_PAGE } from 'src/app/constants';

@Component({
  selector: 'app-man-collection',
  templateUrl: './man-collection.component.html',
  styleUrls: ['./man-collection.component.scss']
})
export class ManCollectionComponent implements OnInit {
  manCollection: any = MAN_COLLECTION;
  manFirstPage: any = MAN_FIRST_PAGE;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToHomepage() {
    this._router.navigateByUrl("");
  }
}
