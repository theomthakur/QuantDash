# QuantDash: Full-Stack Finance Analytics Dashboard with ML Predictions

---

## Features

- **KPI Tracking:** Real-time monitoring of key financial metrics.
- **Interactive Charts:** Supports area, line, bar, pie, and scatter charts using Recharts.
- **Product Management:** Add, edit, and manage financial products seamlessly.
- **Revenue Predictions:** Machine learning-based revenue forecasts using regression analysis.

---

## Tech Stack

`Vite`  `React`  `TypeScript`  `Redux Toolkit`  `RTK Query`  `Material UI`  `Recharts`  `React Router`  `Hero Icons`  `Node.js`  `Express.js`  `MongoDB`  `Mongoose`  `Regression.js`  `Docker`  `Fly.io`  `Vercel`

## Project Structure

```
finance-dashboard/
│
├── frontend/               # React (Vite) frontend
│   ├── public/             # Public assets
│   ├── src/                # Source code
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Redux slices and features
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API services with RTK Query
│   │   ├── store/          # Redux store configuration
│   │   ├── utils/          # Utility functions
│
├── backend/                # Node.js backend
│   ├── config/             # Configuration files
│   ├── controllers/        # API controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── services/           # Business logic and services
│
├── ml/                     # Machine learning models
│   ├── regression.js       # Revenue prediction using regression
│
├── docker-compose.yml      # Docker configuration
├── README.md               # Project documentation
```
