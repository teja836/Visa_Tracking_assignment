# 📌 Visa Slot Alert Tracker (Full-Stack Project)

## 📝 Project Overview
Visa Slot Alert Tracker is a full-stack web application designed to track and manage visa slot alerts.  
Users can create, view, update, and delete visa alerts with different statuses such as Active, Booked, or Expired.

This project demonstrates CRUD operations, RESTful API development, and frontend–backend integration using modern web technologies.

---

## 🎯 Objective
- Build a real-world full-stack CRUD application
- Understand React frontend with API integration
- Implement REST APIs using Node.js and Express
- Store and manage data using MySQL
- Follow clean code and proper project structure

---

## 🚀 Features
- Add new visa slot alerts
- View all alerts in a table
- Update visa status (Active / Booked / Expired)
- Delete visa alerts
- Filter alerts by country or status
- Clean and responsive UI
- REST API with proper HTTP methods
- Centralized error handling

---

## 🧱 Data Model

Each Visa Alert contains:

| Field Name | Description |
|----------|------------|
| id | Unique alert ID |
| country | Country name |
| city | City name |
| visaType | Tourist / Business / Student |
| status | Active / Booked / Expired |
| createdAt | Created date |

---

## 🔄 Project Flow
1. User fills the visa alert form in the React UI.
2. React sends API request using Axios.
3. Express server handles the request.
4. Data is stored in MySQL database.
5. Backend sends response to frontend.
6. UI updates with latest visa alert data.
7. User can update or delete alerts.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js

### Database
- MySQL / MariaDB

### Tools
- Git & GitHub
- Postman
- VS Code

---

## 📂 Project Structure

### Backend
