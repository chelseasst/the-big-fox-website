import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  imagesArray: String[] = [];
  selectedFiles: File[] = [];
  message: string = '';
  isSubmitting: boolean = false;
  constructor(private adminService: AdminService) { }

  async addEvent(form: NgForm) {

    if (form.valid) {
      const messageObj = await this.adminService.addEvent(form, this.selectedFiles);
      this.message = messageObj.message;
      form.resetForm();
      this.removeSelectedFiles();
      this.isSubmitting = false;
    } else {
      this.message = 'Missing Fields'
    }
  }
  previewImage(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      Array.from(files).forEach(file => {
        this.selectedFiles.push(file); //we store the real file object, not base64 format
        const reader = new FileReader();
        //FileReader is part of the browser API

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
