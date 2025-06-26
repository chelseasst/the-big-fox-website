import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  views!: number;
  totalUsersCount!: number;
  monthlyUsersCount!: number;
  totalUsers!: number;
  message: string | undefined = undefined;
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    //  TODO uncomment and implement when deployed and Google Analytics works
    // this.getViews();
    this.getUsersCount();
  }
  async getViews() {
    //  TODO uncomment and implement when deployed and Google Analytics works
    const { startDate, endDate } = this.getDates();
    // this.views = await this.adminService.getAllViews(startDate, endDate).views;
  }
  getDates() {
    //users from 1st of this month until today
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split("T")[0];
    const endDate = new Date().toISOString().split("T")[0]; //YYYY-MM-DD
    return { startDate, endDate }
  }
  async getUsersCount() {
    const usersObj = await this.adminService.getAllUsers();
    if (!usersObj) {
      this.message = 'User token has expired, Please log in'
      return
    }
    this.totalUsersCount = usersObj.total;
    this.monthlyUsersCount = usersObj.monthly;
  }
}
