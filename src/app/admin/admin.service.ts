import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { handleToken } from '../utilis/token-check';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  async getAllUsers(startDate: string, endDate: string) {
    const token = await handleToken();
    if (!token) { return false }
    try {
      const response = await fetch(`http://localhost:3000/api/user/all-users?start=${startDate}&end=${endDate}`, {
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
      console.log('All users', data)
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
      return data;
    } catch (error) {
      console.error("Error fetching analytics views:", error);
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
        headers: { "Authorization": `Bearer ${token}` },
        body: formData,
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
}