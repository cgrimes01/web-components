import { Component } from '@angular/core';

import { QuoteService } from './quote.service';
import { IQuote } from './quote';

@Component({
  selector: 'whats-that-father',
  templateUrl: './whatsthatfather.component.html',
  styleUrls: ['./whatsthatfather.component.css']
})
export class WhatsThatFatherComponent {

  constructor(private quoteService: QuoteService ) {
  }

  title = 'ng-web-component';
  currentQuote: IQuote;
  
  ngOnInit() {
    this.newRandomQuote();
  }

  newRandomQuote(): void {
    this.currentQuote = this.quoteService.getQuote();
  }
}
