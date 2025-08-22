# The Big Fox Coffee Shop Website 🦊

This is a fully responsive, modern Angular web application for a coffee shop, designed and developed by me. The project demonstrates a real-world, production-ready architecture with both user and admin experiences, a secure authentication system, and a feature-rich UI/UX.
I haven't used any AI agent for this project, except some help from ChatGPT for basic questions I had.

## 🌐 Live Demo
Visit the deployed application: [https://the-big-fox-website.vercel.app/home](https://the-big-fox-website.vercel.app/home)

---

## Features

### 🌟 General Features
- **Custom Design & Layout:** All UI/UX and layouts are original, crafted for a unique coffee shop experience.
- **Fully Responsive:** Works beautifully on desktop, tablet, and mobile devices.
- **Modern Angular Stack:** Built with Angular 16+, using best practices for modularity and maintainability.
- **Google Maps Integration:** For displaying shop location and hours.

### 👤 User Features
- **Browse Menu:** View all food, drinks, and bakery items with images and descriptions.
- **Our Story:** Learn about the coffee shop’s background and philosophy.
- **Events & Specials:** See upcoming events and special offers (login required).
- **Gift Cards:** Purchase digital or physical gift cards.
- **Order Online:** Add products to a cart, view details, and proceed to checkout.
- **Shopping Cart:** Cart logic uses RxJS Observables and session storage for a seamless experience.
- **Checkout Flow:** Complete purchases with a user-friendly checkout process.
- **Authentication:** Register and log in with email and password. JWT tokens are used for secure sessions.
- **Token Renewal:** Tokens are automatically renewed on the backend if expired, so users rarely need to re-login.
- **Protected Routes:** Certain pages (like events) require login; regular users cannot access admin or event management features.

### 🛒 Cart & Checkout Logic
- **Observable-based Cart:** Cart state is managed with RxJS, providing real-time updates across the app.
- **Session Storage:** Cart contents persist across page reloads and browser sessions.
- **Increment/Decrement/Delete:** Users can adjust quantities or remove items from the cart.
- **Order Summary:** See a summary of your order before checkout.

### 🔐 Authentication & Security
- **JWT Auth:** Secure login/register with JWT tokens.
- **Token Renewal:** Backend checks and renews tokens if expired, keeping users logged in.
- **Role-based Access:** Only admins can access the admin dashboard and management features.

### 🛠️ Admin Features
- **Admin Dashboard:** Accessible to admins after login (e.g., izana@gmail.com/12345678I or copilot@gmail.com/12345678C).
- **User Management:** View all registered users.
- **Order Management:** View and manage all orders.
- **Product Management:** Add or delete products and menu items.
- **Event Management:** Add new events and specials.
- **Admin Management:** Add or remove other admins.
- **Protected Actions:** All admin actions are protected by authentication and role checks.

### ⚙️ Backend Integration
- **RESTful API:** All data operations (add product, add admin, etc.) are handled by a backend server also fully developed by me.
- **Cloudinary Image Uploads:** When a new product or menu item is added, the backend first calls a Cloudinary middleware to upload the photo to the cloud. Cloudinary returns a URL, which is then used in the app to display the image.

### 🧩 Other Notable Features
- **Initial Popups & Animations:** Engaging popups and smooth animations throughout the site.
- **Reusable Components:** Modular Angular components for easy maintenance and scalability.
- **Custom Directives & Pipes:** For enhanced UI logic and formatting.
- **Error Handling:** User-friendly error messages and fallback UI for failed actions.
- **Accessibility:** Designed with accessibility in mind.

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
cd the-big-fox-website
npm install
```

### Running the App

```bash
npm run start
```
Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Admin Login (Demo)
- **Email:** izana@gmail.com | **Password:** 12345678I
- **Email:** copilot@gmail.com | **Password:** 12345678C

---

## Project Structure

- `src/app/` – Main Angular app code (components, modules, services)
- `src/assets/` – Images and static assets
- `src/environments/` – Environment configs

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
## Future Goals for this project
- clean-up messy code
- add new features like - card payment
- add more security measures 

## License

This project is for demonstration and educational purposes.
