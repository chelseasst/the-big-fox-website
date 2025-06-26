import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { handleToken } from '../utilis/token-check';
import { EventDetails } from '../types/event';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  events: EventDetails[] = [];
  allUsers: User[] = [];
  monthlyUsers: User[] = []

  async getAllUsers() {
    const token = await handleToken();
    if (!token) { return false }
    if (this.allUsers.length > 0 && this.monthlyUsers.length > 0) {
      return { total: this.allUsers, monthly: this.monthlyUsers }
    }
    try {
      const response = await fetch(`http://localhost:3000/api/user/all-users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      if (!response.ok) {
        return false
      }
      const data = await response.json();
      this.allUsers = data.totalUsersCount;
      this.monthlyUsers = data.monthlyUsersCount;
      return { total: data.totalUsersCount, monthly: data.monthlyUsersCount }

    } catch (error) {
      return false
    }
  }
  async getFilterUsers(startDate: string, endDate: string) {
    const token = await handleToken();
    if (!token) { return false }
    try {
      const response = await fetch(`http://localhost:3000/api/user/filter-users?start=${startDate}&end=${endDate}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      if (!response.ok) {
        return false
      }
      const data = await response.json();
      console.log('Filtered Users', data)
      return data

    } catch (error) {
      return false
    }
  }
  async getAllViews(startDate: string, endDate: string) {
    const token = await handleToken();
    if (!token) { return false }
    try {
      const response = await fetch(`http://localhost:3000/api/analytics/views?startDate${startDate}&endDate=${endDate}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      console.log('VIEWS', data);
      return data;
    } catch (error) {
      console.error("Error fetching analytics views:", error);
    }
  }
  async getAllEvents(): Promise<EventDetails[] | { message: string }> {
    if (this.events.length > 0) {
      return this.events;
    }
    try {
      const response = await fetch("http://localhost:3000/api/events", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch events.");
      }
      const eventData = await response.json();
      this.events = eventData;
      return eventData
    } catch (error) {
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }
  async addAdmin(data: { email: string, password: string, newAdminEmail: string }) {
    if (!data) { return 'Missing data' }
    const token = await handleToken();
    if (!token) { return 'Token invalid, please log in again' }
    try {
      const response = await fetch("http://localhost:3000/api/user/add-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message;
      }
      const message = await response.json(); //{message: 'Succesfully added}

      return message;

    } catch (error) {
      return 'Server error'
    }
  }
  async deleteAdmin(data: { email: string, password: string, delAdminEmail: string }) {
    if (!data) { return 'Missing data' }
    const token = await handleToken();
    if (!token) { return 'Token invalid, please log in again' }
    try {
      const response = await fetch(`http://localhost:3000/api/user/delete-admin?delAdminEmail=${data.delAdminEmail}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message;
      }
      const message = await response.json(); //{message: 'SUccesfully added}

      return message;

    } catch (error) {
      return 'Server error'
    }
  }
  async addProduct(form: NgForm, files: File[]) {
    const token = await handleToken();
    if (!token) { return 'Token invalid, please log in again' };

    let url;
    if (form.value.productType === 'food') {
      url = 'http://localhost:3000/api/add-product/food'
    } else if (form.value.productType === 'merch') {
      url = 'http://localhost:3000/api/add-product/merch'
    } else { //change to the form from Inspect
      { return { message: 'Invalid product type provided.' } }
    }
    const formData = new FormData();

    // Append text fields
    Object.keys(form.value).forEach((key) => {
      formData.append(key, form.value[key]);
    });

    // Append each file correctly
    files.forEach((file) => {
      formData.append("images", file); // Matches Multer field name in backend
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData, //content type becomes multipart/form-data.
      });
      if (!response.ok) {
        const errorData = await response.json();
        return { message: errorData.message || 'Request failed' }
      }
      const message = await response.json(); //{message: 'Succesfully added}

      return message;

    } catch (error) {
      return 'Server error'
    }
  }
  async addMenuItem(form: NgForm) {
    const token = await handleToken();
    if (!token) { return 'Token invalid, please log in again' };
    let url;
    let formData;
    if (form.value.productType === 'food') {
      url = 'http://localhost:3000/api/menu/add-food';
      formData = {
        title: form.value.title,
        details: form.value.details,
        price: form.value.price,
      };
    } else if (form.value.productType === 'drink') {
      url = 'http://localhost:3000/api/menu/add-drink';
      formData = {
        title: form.value.title,
        small: form.value.priceS,
        large: form.value.priceL,
      };
    } else { //changes to the form from Inspect
      { return { message: 'Invalid product type provided.' } }
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
         },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return { message: errorData.message || 'Request failed' }
      }
      const message = await response.json();

      return message;

    } catch (error) {
      console.log(error)
      return 'Server error'
    }
  }
  async addEvent(form: NgForm, files: File[]) {
    const token = await handleToken();
    if (!token) { return 'Token invalid, please log in again' };

    const formData = new FormData();

    // Append text fields
    Object.keys(form.value).forEach((key) => {
      formData.append(key, form.value[key]);
    });

    // Append each file correctly
    files.forEach((file) => {
      formData.append("images", file); // Matches Multer field name in backend
    });

    try {
      const response = await fetch('http://localhost:3000/api/events/add-event', {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body: formData, //content type becomes multipart/form-data.
      });
      if (!response.ok) {
        const errorData = await response.json();
        return { message: errorData.message || 'Request failed' }
      }
      const message = await response.json(); //{message: 'Succesfully added}

      return message;

    } catch (error) {
      console.log('Event error', error)
      return 'Server error'
    }
  }
}