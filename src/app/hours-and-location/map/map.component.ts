import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { mapStyles } from './map.styles';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') mapElement!: ElementRef;
  map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }
  async initMap(): Promise<void> {
    let map;
    const position = { lat: -33.89227726734658, lng: 151.27366588132946 };
    // TODO ADD API KEY
    const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

    map = new Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: position,
      //ROADMAP
      mapId: '45dae20e6f6ad0eb',
      styles: mapStyles,
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: 'Uluru',
    });
  }
  openMap() {
    window.open('https://www.google.com/maps/dir//77+Campbell+Parade,+Bondi+Beach+NSW+2026,+%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/@-33.8922522,151.2730877,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6b12ad9b9f23a40b:0xc2763486ba6f889d!2m2!1d151.2730877!2d-33.8922522?entry=ttu')
  }
}
