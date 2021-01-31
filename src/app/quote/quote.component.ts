import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../module/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Output() myData = new EventEmitter();
  
  quotes: Quote[] = [
    new Quote(
      'Dont believe anything that you read on the internet, it may be fake.',
      'Abraham Lincon',
      new Date(2021, 1, 6),
      0,
      0
    ),
    new Quote(
      'Be yourself; everyone else is already taken.',
      'Oscar Wilde',
      new Date(2021, 2, 8),
      0,
      0
    ),
    new Quote(
      'Genetic code is a divine writing.',
      'Toba Beta ',
      new Date(2019, 4, 11),
      0,
      0
    ),
    new Quote(
      'Unless you know the code, it has no meaning.',
      'John Connolly',
      new Date(2019, 5, 3),
      0,
      0
    ),
    new Quote(
      'Real web designers write code. Always have, always will.',
      'Jeffrey Zeldman',
      new Date(2018, 6, 3),
      0,
      0
    ),
    new Quote(
      'Any sufficiently advanced technology is indistinguishable from magic.',
      'Arthur C. Clarke',
      new Date(2014, 8, 6),
      0,
      0
    )
  ]

  constructor() { }

  public upvote: true;

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  ngOnInit(): void {
  }

}
