import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  viewsPeriods: { viewsCount: number, startDate: string, endDate: string }[] = []
  data!: string;
  message: string = '';
  today!: string;
  constructor(private adminService: AdminService) { }
  async ngOnInit() {
    this.today = new Date().toISOString().split("T")[0]; //YYYY-MM-DD
  }
  async filterViews(startDate: string, endDate: string) {
    const today = new Date().toISOString().split("T")[0];
    if (!startDate || !endDate) {
      alert("Dates cannot be in the future!");
      return
    }
    if (startDate > today || endDate > today) {
      alert("Dates cannot be in the future!");
      return;
    }
    //  TODO fetch real views
    const viewsCount = await this.adminService.getAllViews(startDate, endDate);
    this.viewsPeriods.push({ viewsCount: viewsCount, startDate, endDate })
  }
  removePeriod(index: number) {
    this.viewsPeriods.splice(index, 1);
  }
}
