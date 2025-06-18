import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent {
  message: string = '';
  constructor(private adminService: AdminService) { }
  async deleteAdmin(form: NgForm) {
    if (form.valid) {
      const data = {
        email: form.value.email,
        password: form.value.password,
        delAdminEmail: form.value.delAdminEmail
      }
      const messageObj = await this.adminService.deleteAdmin(data);
      this.message = messageObj.message;
    }
  }
}
