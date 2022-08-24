import { Component, OnInit } from '@angular/core';
import { CLO_3D, COLLECTIONS } from 'src/app/constants';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  collections = COLLECTIONS;
  clo_3d = CLO_3D;

  constructor() { }

  ngOnInit(): void {
  }

}
