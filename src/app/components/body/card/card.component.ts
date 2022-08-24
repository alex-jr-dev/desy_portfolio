import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() text: string;
  @Input() cover: any;
  @Input() isClo: boolean;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cover = this._sanitizer.bypassSecurityTrustResourceUrl(this.cover);
  }
}
