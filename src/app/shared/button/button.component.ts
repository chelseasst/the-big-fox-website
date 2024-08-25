import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input('text') text: string = '';
  @Input('navigateTo') navigateTo: string = '';
  @Input('clicked') clicked: boolean = false;
  
}
