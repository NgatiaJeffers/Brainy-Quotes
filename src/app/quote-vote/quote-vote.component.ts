import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../module/quote'

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {

  numberOfLikes = 0;
  numberOfDislikes = 0;

  constructor() { }

  @Input() quote: Quote;
  @Output() Upvote = new EventEmitter();

  ngOnInit(): void {
  }

  likeClick() {
    this.Upvote.emit(this.numberOfLikes);
    this.numberOfLikes++;
  }

  dislikeClick() {
    this.numberOfDislikes++;
  }

}
