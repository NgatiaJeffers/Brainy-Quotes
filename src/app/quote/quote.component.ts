import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../module/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Output() data = new EventEmitter();
  
  quotes: Quote[] = [
    new Quote(
      'Dont believe anything that you read on the internet, it may be fake.',
      'Abraham Lincon',
      new Date(2021, 1, 6),
      970
    ),
    new Quote(
      'Be yourself; everyone else is already taken.',
      'Oscar Wilde',
      new Date(2021, 2, 8),
      895
    ),
    new Quote(
      'Genetic code is a divine writing.',
      'Toba Beta ',
      new Date(2019, 4, 11),
      411
    ),
    new Quote(
      'Unless you know the code, it has no meaning.',
      'John Connolly',
      new Date(2019, 5, 3),
      452
    ),
    new Quote(
      'Real web designers write code. Always have, always will.',
      'Jeffrey Zeldman',
      new Date(2018, 6, 3),
      632
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
