import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Hapiness is when what you say, what you think and what you are harmony','Peter', 'Jason',new Date(2020,6,9)),
    new Quote(2, 'If people are doubting how far you can go, go so far that you can’t hear them anymore.', ' Michele Ruiz','seff',new Date(2020,7,9)), 
    new Quote(3, 'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.','Arianna Huffington','Joseph',new Date(2020,6,9)),
    // new Quote(4, 'Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.','Joss Whedon','Joseph',new Date(2020,6,7)),
    // new Quote(5, 'I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.','Leah Busque','gandhi',new Date(2020,10,9)),
  ];
  upVote(index) {

    this.quotes[index].upvote++;
  }

  downVote(index) {

    this.quotes[index].downvote++;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }
  toggleDetails(index) {
    this.quotes[index].description = !this.quotes[index].description;
  }
  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highestUpVote() {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}

