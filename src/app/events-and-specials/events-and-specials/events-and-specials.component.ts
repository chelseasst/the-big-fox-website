import { Component } from '@angular/core';

@Component({
  selector: 'app-events-and-specials',
  templateUrl: './events-and-specials.component.html',
  styleUrls: ['./events-and-specials.component.css']
})
export class EventsAndSpecialsComponent {
  eventData: any = {
    url: "../assets/events-and-specials/IMG_5506.JPG",
    title: "Coffee Date And Polaroid Pictures",
    eventDate: "06-08-2024",
    days: "Friday/Saturday/Sunday",
    time: "9h - 19h",
    details: 'We are so happy to invite you to our Photo Booth event, which will take place in our Café on Avenue 36, take your gloss, friend or dog, buy a coffee and you will get access to our Retro images foto booth. 🤍 📸'
  }
}
