# React & Node.js Full-Stack Application

This project consists of a **React frontend** and a **Node.js Express backend** that work together to fetch and display data. The frontend allows users to navigate to a `/data` route, where data is fetched from the backend API with pagination support.

---
## 🛠️ Project Structire

📂 project-root
 ├── 📂 frontend  # React app (Vite)
 ├── 📂 backend   # Node.js & Express server
 ├── README.md    # Documentation


## 🛠️ Tech Stack
Frontend: React (Vite), Axios, React Router

Backend: Node.js, Express, CORS, Nodemon

## 🛠️ Environment Setup

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (>= 16.x recommended)
- **npm** (Comes with Node.js)

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/nabeel392/MERN-Assignment.git
cd MERN-Assignment
```

---

## 🚀 Backend Setup (Node.js & Express)

### **Navigate to the Backend Folder**
```sh
cd backend
```

### **Install Dependencies**
```sh
npm install
```

### **Run the Backend Server**
Start the backend server using nodemon:
```sh
npm run dev
```
npm run dev uses nodemon, which automatically restarts the server when file changes are detected.
If you want to start without nodemon, use:
```sh
npm start
```
This will start the backend on **http://localhost:5000**.

> Ensure your backend is running before testing the frontend.

---

## 🎨 Frontend Setup (React & Vite)

### **Navigate to the Frontend Folder**
```sh
cd frontend
```

### **Install Dependencies**
```sh
npm install
```

### **Set Up Environment Variables**
Create a `.env` file in the `frontend` folder and add:
```sh
VITE_API_BASE_URL=http://localhost:5000
```

### **Run the Frontend Server**
```sh
npm run dev
```
This will start the frontend on **http://localhost:5173**.

---

## 📌 Testing the Application

1. Open your browser and go to `http://localhost:5173/`.
2. Click the **"Get Data"** button.
3. You will be navigated to `/data`, where the data is fetched from the backend and displayed.
4. The API supports pagination using query parameters (`?page=1&limit=10`).

---

## 🔧 Troubleshooting

- **Backend Not Starting?** Ensure port 5000 is free or modify it in `server.js`.
- **Frontend Not Connecting to Backend?** Check `.env` in `frontend` and restart the frontend server.
- **Changes Not Reflecting?** Restart both servers after making changes.

