import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input('url') url: string = '';
  @Input('title') title: string = '';
  @Input('eventDate') eventDate: string = '';
  @Input('days') days: string = '';
  @Input('time') time: string = '';
}
