import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/types/chat';
@Component({
  selector: 'app-initial-popup',
  templateUrl: './initial-popup.component.html',
  styleUrls: ['./initial-popup.component.css'],
  animations: [
    trigger('initialPopupState', [
      state(
        'hidden',
        style({
          transform: 'scale(0.2)',
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      transition('hidden <=> visible', [animate('0.5s ease-in')]),
    ]),
    trigger('typingState', [
      state('up', style({ 'margin-bottom': '7px' })),
      state('down', style({ 'margin-bottom': '0' })),
      transition('up <=> down', [animate('0.3s ease-in')]),
    ]),
    trigger('messageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '0.3s ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
    trigger('messageAnimationTyping', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-23px)' }),
        animate(
          '0.3s ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class InitialPopupComponent implements OnInit, AfterViewInit {
  pageState: 'visible' | 'hidden' = 'hidden';
  isTyping: boolean = true;
  typingState: ('up' | 'down')[] = ['down', 'down', 'down'];
  @Output() close = new EventEmitter<void>();

  chat1: ChatMessage[] = [];
  chat2: ChatMessage[] = [
    {
      id: '1',
      text: 'Heey',
      sender: 'friend',
      type: 'text',
    },
    {
      id: '2',
      text: 'Did you see the event at TheBigFox this Friday?',
      sender: 'friend',
      type: 'text',
    },
    {
      id: '3',
      text: 'There is gonna be a Jazz band!!',
      sender: 'friend',
      type: 'text',
    },
    {
      id: '4',
      text: 'Really? Send me the link',
      sender: 'me',
      type: 'text',
    },
    {
      id: '6',
      text: 'thebigfox.com/events-and-specials',
      sender: 'friend',
      type: 'text',
    },
  ];
  ngOnInit() {
    setTimeout(() => {
      this.pageState = 'visible';
    }, 500);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.typingSimulation(); //takes 1200s
      this.displayMessages();
    }, 500);
  }
  closePopup() {
    this.pageState = 'hidden';
    setTimeout(() => {
      this.close.emit();
    }, 500);
  }
  displayMessages() {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.chat2.length) {
        this.isTyping = false;
        this.chat1.push(this.chat2[index]);
        index++;
        //the next message's sender
        if (this.chat2[index]?.sender == 'friend') {
          setTimeout(() => {
            this.isTyping = true;
            this.typingSimulation();
          }, 1200);
        }
      } else {
        clearInterval(interval);
        this.isTyping = false;
      }
    }, 2400); //the interval includes waiting for the setTimeout + the actual typing time
  }
  typingSimulation() {
    //1200s needed 150s waiting + 3x
    const dotCount = 3;
    let currentIndex = 0;
    let iteration = 0;
    const savedInterval = setInterval(() => {
      //here we can change the iterations / if we change the typing time
      if (this.isTyping && iteration < 2) {
        this.typingState = this.typingState.map(
          (state: 'up' | 'down', index: number) => {
            return index === currentIndex
              ? state === 'up'
                ? 'down'
                : 'up'
              : state;
          }
        );
        currentIndex++;
        if (currentIndex > 2) {
          //we've reached the last dot
          currentIndex = 0; //and we start again, until iteration N2 completes
        }
      } else {
        clearInterval(savedInterval);
        this.typingState = ['down', 'down', 'down'];
      }
    }, 150); //less than the animation, so the dot moves before the other is home;
  }
}
