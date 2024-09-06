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

    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

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
}
