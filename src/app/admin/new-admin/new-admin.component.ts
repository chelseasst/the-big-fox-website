import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent {
  message: string = '';
  isSubmitting: boolean = false;
  constructor(private adminService: AdminService) { }
  async addAdmin(form: NgForm) {
    if (this.isSubmitting) return
    this.isSubmitting = true;
    if (form.valid) {
      const data = {
        email: form.value.email,
        password: form.value.password,
        newAdminEmail: form.value.newAdminEmail
      }
      const messageObj = await this.adminService.addAdmin(data);
      this.message = messageObj.message;
      form.resetForm();
      this.isSubmitting = false;
    } else {
      this.message = 'Missing Fields'
    }
  }
}
