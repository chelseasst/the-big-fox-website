import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  imagesArray: string[] = [];
  selectedFiles: File[] = [];
  message: string = '';
  isSubmitting: boolean = false;
  
  constructor(private adminService: AdminService) { }

  async addProduct(form: NgForm) {
    if (this.isSubmitting) return
    this.isSubmitting = true;
    if (form.valid) {
      const messageObj = await this.adminService.addProduct(form, this.selectedFiles);
      this.message = messageObj.message;
      form.resetForm();
      this.removeSelectedFiles();
      this.isSubmitting = false;
    } else {
      this.message = 'Missing Fields'
    }
  }
  previewImages(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      Array.from(files).forEach(file => {
        this.selectedFiles.push(file); //we store the real file object, not base64 format
        const reader = new FileReader();

        //when the file finishes loading, this event is triggered
        reader.onload = (event: any) => {
          this.imagesArray.push(event.target.result); //base64 image data
        }
        reader.readAsDataURL(file);
        //we call the file to be read as base64 format
      })
    }
  }
  removeSelectedFiles() {
    this.imagesArray = [];
    this.selectedFiles = [];
  }
}
