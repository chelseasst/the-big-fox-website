import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input('eventData') eventData!: any;
  constructor(private render: Renderer2) { }
  toggleFlip(event: TouchEvent) {
    const target = event.target;
    if (target) {
      if (event.type === 'touchstart') {
        this.render.addClass(target, 'card-touched');
      } else if (event.type === 'touchend') {
        this.render.removeClass(target, 'card-touched');
      }
    }
  }
}
