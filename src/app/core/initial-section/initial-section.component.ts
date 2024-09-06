import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-section',
  templateUrl: './initial-section.component.html',
  styleUrls: ['./initial-section.component.css'],
  animations: [
    trigger('showInitial', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('hidden => visible', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class InitialSectionComponent implements OnInit {
  @Input('heading') heading: string | undefined = '';
  @Input('url') url: string = ''; //for the background image
  @Input('isHome') isHome: boolean = false;
  pageState: string = 'hidden';
  ngOnInit() {
    setTimeout(() => {
      this.pageState = 'visible';
    }, 100);
  }
  
}
