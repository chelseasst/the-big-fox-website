import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showInitialPopup: boolean = false;
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.showInitialPopup = true;
      sessionStorage.setItem('hasVisited', 'true');
      this.togglePopup();
    }
  }
  togglePopup() {
    if (this.showInitialPopup) {
      console.log('class added');
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
  closePopup() {
    this.showInitialPopup = false;

    this.togglePopup();
  }
}
