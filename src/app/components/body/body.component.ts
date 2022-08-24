import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLO_3D, COLLECTIONS } from 'src/app/constants';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  collections = COLLECTIONS;
  clo_3d = CLO_3D;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onNavigate(route: string) {
    this._router.navigateByUrl(route);
  }

}
