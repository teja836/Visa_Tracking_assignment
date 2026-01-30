# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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


---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | /alerts | Fetch all visa alerts |
| POST | /alerts | Add a new visa alert |
| PUT | /alerts/:id | Update visa alert |
| DELETE | /alerts/:id | Delete visa alert |

---

## 🧪 Sample API Request
```json
{
  "country": "India",
  "city": "Hyderabad",
  "visa_type": "Tourist",
  "status": "Active"
}