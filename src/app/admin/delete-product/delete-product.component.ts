import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  message: string = '';
  isSubmitting: boolean = false;
  constructor(private adminService: AdminService) { }
  async deleteProduct(form: NgForm) {
    if (this.isSubmitting) return
    this.isSubmitting = true;
    if (form.valid) {
      form.resetForm();
      const data = {
        email: form.value.email,
        password: form.value.password,
        slug: form.value.slug,
        productType: form.value.productType
      }
      const messageObj = await this.adminService.deleteProduct(data);
      this.message = messageObj;
      this.isSubmitting = false;
    }
  }
}
