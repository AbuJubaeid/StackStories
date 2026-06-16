# StackStories

A modern blogging platform built with Next.js, Firebase Authentication, and Tailwind CSS, where users can discover, read, and share stories from the developer community.

## 🌐 Live Website

**Live Site:**

## 📂 Repository

**GitHub Repository:** https://github.com/AbuJubaeid/StackStories

---

## 🚀 Features

### Public Features

- Responsive landing page
- Modern and clean UI design
- Browse all blog posts
- View detailed blog content
- Search and discover stories
- Mobile-friendly layout

### Authentication Features

- Firebase Authentication
- User Registration
- User Login
- Google Sign-In
- Protected Routes
- Persistent Authentication State
- Logout Functionality

### User Features

- View profile information
- Access protected pages
- Personalized user experience

### UI & UX Features

- Light/Dark Mode Support
- Responsive Navbar
- Loading States
- Error Handling
- Modern Card Layouts
- Toast Notifications

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- DaisyUI

### Authentication

- Firebase Authentication

### State Management

- React Context API

### Styling

- Tailwind CSS
- DaisyUI Components

---

## 📁 Project Structure

```bash
src/
│
├── app/
│   ├── login/
│   ├── register/
│   ├── blogs/
│   ├── profile/
│   └── dashboard/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Banner/
│   └── Shared/
│
├── providers/
│   └── AuthProvider/
│
├── hooks/
│
├── firebase/
│   └── firebase.config.ts
│
├── routes/
│   └── PrivateRoute.tsx
│
└── utils/
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AbuJubaeid/StackStories.git
```

### 2. Navigate to Project Directory

```bash
cd StackStories
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Run Development Server

```bash
npm run dev
```

---

## 🔥 Firebase Setup

1. Create a Firebase Project.
2. Enable Authentication.
3. Enable:
   - Email/Password Authentication
   - Google Authentication

4. Copy Firebase Configuration.
5. Add credentials to `.env.local`.

---

## 📱 Responsive Design

The application is optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## 🔒 Protected Routes

Authenticated users can access:

- Dashboard
- Profile
- User-Specific Features

Unauthenticated users are redirected to the Login page.

---

## 👨‍💻 Developer

**MD. Abu Jubaeid Pranto**

- LinkedIn: https://www.linkedin.com/in/abujubaeidpranto/
