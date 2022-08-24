import { Component, OnInit } from '@angular/core';
import { WOMAN_COLLECTION } from 'src/app/constants';

@Component({
  selector: 'app-woman-collection',
  templateUrl: './woman-collection.component.html',
  styleUrls: ['./woman-collection.component.scss']
})
export class WomanCollectionComponent implements OnInit {
  womanCollection: any = WOMAN_COLLECTION;
  firstPage: any;

  constructor() { }

  ngOnInit(): void {
    this.firstPage = this.womanCollection.shift();
  }
}
