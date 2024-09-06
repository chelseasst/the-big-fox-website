import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showInitialPopup: boolean = true;
  ngOnInit(): void {
    // const hasVisited = sessionStorage.getItem('hasVisited');
    // console.log(hasVisited)
    // if (!hasVisited) {
    //   this.showInitialPopup = true;
    //   sessionStorage.setItem('hasVisited', 'true');
    // }
  }
  closePopup() {
    this.showInitialPopup = false;
  }
}
