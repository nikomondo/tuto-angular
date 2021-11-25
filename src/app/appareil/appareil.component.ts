import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName?: string;
  @Input() appareilStatus?: string

  constructor() {
//    this.appareilName = "Appareil"
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getFontStyle() {
     if (this.appareilStatus === "éteint") {
      return 'italic';
    }
    return 'normal'
    }

  }
