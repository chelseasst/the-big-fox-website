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
    trigger('typingState', [
      state('up', style({ 'margin-bottom': '7px' })),
      state('down', style({ 'margin-bottom': '0' })),
      transition('up <=> down', [animate('0.3s ease-in')]),
    ]),
    trigger('messageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.3s ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('messageAnimationTyping', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-23px)' }),
        animate('0.3s ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class InitialPopupComponent implements AfterViewInit {
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
    // {
    //   id: '5',
    //   text: 'Be there for sure !',
    //   sender: 'me',
    //   type: 'text',
    // },
    {
      id: '6',
      text: 'thebigfox.com/events-and-specials',
      sender: 'friend',
      type: 'text',
    },
  ];
  ngAfterViewInit(): void {
    this.typingSimulation(); //takes 1200s
    this.displayMessages();
  }
  closePopup() {
    this.close.emit();
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
          //we reached the last dot
          currentIndex = 0; //and we start again, until iteration N2 completes
        }
      } else {
        clearInterval(savedInterval);
        this.typingState = ['down', 'down', 'down'];
      }
    }, 150); //less that the animation , so the dot moves before the other is home, making it more like insta
  }
}
