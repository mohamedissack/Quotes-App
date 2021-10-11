import { Directive,ElementRef,Input } from '@angular/core';
import { Quote} from './quote'

@Directive({
  selector: '[appHighUpvote]'
})
export class HighUpvoteDirective {
  quotes: Quote;

  
constructor(private el: ElementRef) {
  this.highlight(this.highlightColor || this.defaultColor || 'red');
 }
@Input() defaultColor: string;
@Input('myHighlight') highlightColor: string;
 
 
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

  
  
}

