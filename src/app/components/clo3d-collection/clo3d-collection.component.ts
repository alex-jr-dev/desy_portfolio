import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLOD_3D_COLLECTION, CLO_3D_FIRST_PAGE } from 'src/app/constants';

@Component({
  selector: 'app-clo3d-collection',
  templateUrl: './clo3d-collection.component.html',
  styleUrls: ['./clo3d-collection.component.scss']
})
export class Clo3dCollectionComponent implements OnInit {
  clo3dCollection: any = CLOD_3D_COLLECTION;
  clo3dFirstPage: any = CLO_3D_FIRST_PAGE;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToHomepage() {
    this._router.navigateByUrl("");
  }
}
