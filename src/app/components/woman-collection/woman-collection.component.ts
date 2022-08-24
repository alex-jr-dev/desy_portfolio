import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WOMAN_COLLECTION } from 'src/app/constants';

@Component({
  selector: 'app-woman-collection',
  templateUrl: './woman-collection.component.html',
  styleUrls: ['./woman-collection.component.scss']
})
export class WomanCollectionComponent implements OnInit {
  womanCollection: any = WOMAN_COLLECTION;

  constructor(private _sanitazier: DomSanitizer) { }

  ngOnInit(): void {
    // this.womanCollection = this.womanCollection.map(page => {
    //   let image = this._sanitazier.bypassSecurityTrustResourceUrl(page.image);

    //   return {
    //     label: page.label,
    //     image: image,
    //   }
    // });
  }
}
