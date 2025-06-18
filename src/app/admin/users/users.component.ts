import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  message: string = '';
  today!: string;
  constructor(private adminService: AdminService) { }
  async ngOnInit() {
    this.today = new Date().toISOString().split("T")[0]; //YYYY-MM-DD
  }
  async filterUsers(startDate: string, endDate: string) {
    const today = new Date().toISOString().split("T")[0];

    if (!startDate || !endDate) {
      alert("Dates cannot be in the future!");
      return
    }

    if (startDate > today || endDate > today) {
      alert("Dates cannot be in the future!");
      return;
    }

    const usersObj = await this.adminService.getFilterUsers(startDate, endDate);
    if (!usersObj) {
      this.message = 'User token has expired, Please log in'
      return
    }
    this.users = usersObj.users;
  }
}
