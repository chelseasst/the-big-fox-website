import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { EventDetails } from 'src/app/types/event';

@Component({
  selector: 'app-events-and-specials',
  templateUrl: './events-and-specials.component.html',
  styleUrls: ['./events-and-specials.component.css']
})
export class EventsAndSpecialsComponent implements OnInit {
  message: string = '';
  events: EventDetails[] | undefined;
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.getEvents();
  }
  async getEvents() {
    const data = await this.adminService.getAllEvents();
    if (Array.isArray(data)) {
      this.events = data;
    } else if (data && "message" in data) {
      this.message = data.message;
    } else {
      this.message = "Unexpected response format.";
    }
  }
}
