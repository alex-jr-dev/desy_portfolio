import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() text: string;
  @Input() cover: any;
  @Input() link: string;
  @Input() isClo: boolean;
  @Output() navigate = new EventEmitter<string>();

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cover = this._sanitizer.bypassSecurityTrustResourceUrl(this.cover);
  }

  onSelect() {
    this.navigate.emit(this.link);
  }
}
