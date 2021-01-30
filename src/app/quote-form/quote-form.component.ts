import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('', '', '', new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  addAnotherQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}