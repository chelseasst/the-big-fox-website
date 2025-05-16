import { Component } from '@angular/core';

@Component({
  selector: 'app-site-location',
  templateUrl: './site-location.component.html',
  styleUrls: ['./site-location.component.css']
})
export class SiteLocationComponent {
  openMap() {
    window.open('https://www.google.com/maps/dir//77+Campbell+Parade,+Bondi+Beach+NSW+2026,+%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/@-33.8922522,151.2730877,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6b12ad9b9f23a40b:0xc2763486ba6f889d!2m2!1d151.2730877!2d-33.8922522?entry=ttu')
  }
}
