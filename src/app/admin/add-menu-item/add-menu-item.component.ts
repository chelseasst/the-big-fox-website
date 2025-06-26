import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent {
  message: string = '';
  constructor(private adminService: AdminService) { }
  async addProduct(form: NgForm) {
    if (form.valid) {
      const messageObj = await this.adminService.addMenuItem(form);
      this.message = messageObj.message;
      form.resetForm();
    } else {
      this.message = 'Missing Fields'
    }
  }
}
