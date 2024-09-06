import { Component, Input } from '@angular/core';
import { ChatMessage } from 'src/app/types/chat';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input('message') message!: ChatMessage;
  @Input('hasAvatar') hasAvatar: boolean = false;
}
