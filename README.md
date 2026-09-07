# Visualization Dashboard - Data Analytics Project

## 📋 Project Overview
This is a comprehensive data visualization dashboard built as per the assignment requirements. It visualizes insights data from MongoDB with interactive charts, filters, and analytics.

## 🛠 Tech Stack
- **Backend**: Node.js + Express.js
- **Frontend**: React.js + Vite
- **Database**: MongoDB
- **Charts**: D3.js
- **Styling**: Tailwind CSS
- **Routing**: React Router

## 🚀 Features Implemented

### ✅ Assignment Requirements - COMPLETE

#### Data & Database
- ✅ Used given JSON data (jsondata.json)
- ✅ Created MongoDB database with 1000 insights
- ✅ Data imported via seed script

#### Framework
- ✅ MERN Stack (MongoDB + Express + React + Node.js)
- ✅ Express API for data retrieval
- ✅ React frontend with modern UI

#### Charts & Visualizations (D3.js)
- ✅ Intensity Analysis Chart
- ✅ Likelihood Analysis Chart
- ✅ Relevance Analysis Chart
- ✅ Topic Distribution Chart
- ✅ Country Distribution Chart
- ✅ Region Distribution Chart
- ✅ Year Distribution Chart
- ✅ City Distribution Chart

#### Important Variables Visualized
- ✅ Intensity
- ✅ Likelihood
- ✅ Relevance
- ✅ Year
- ✅ Country
- ✅ Topics
- ✅ Region
- ✅ City

#### Filters Implemented
- ✅ End Year Filter
- ✅ Topics Filter
- ✅ Sector Filter
- ✅ Region Filter
- ✅ PEST Filter (pestle)
- ✅ Source Filter
- ✅ SWOT Filter
- ✅ Country Filter
- ✅ City Filter

#### Additional Features
- ✅ KPI Cards (Total Insights, Avg Intensity, Avg Likelihood, Avg Relevance)
- ✅ Interactive Navigation (Dashboard, Insights, Analytics pages)
- ✅ Data Table with complete insights
- ✅ Responsive Design
- ✅ Loading States & Error Handling
- ✅ Professional UI with Tailwind CSS

## 📁 Project Structure
```
visualization-dashboard/
├── backend/
│   ├── src/
│   │   ├── config/db.js          # MongoDB connection
│   │   ├── controllers/           # API controllers
│   │   ├── models/               # MongoDB models
│   │   ├── routes/               # API routes
│   │   ├── middleware/           # Error handling
│   │   └── seed.js               # Data import script
│   ├── package.json
│   └── server.js                 # Express server
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── pages/                # Page components
│   │   ├── services/             # API services
│   │   └── utils/                # Utility functions
│   ├── package.json
│   └── vite.config.js
└── data/
    └── jsondata.json             # Source data
```

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running
- npm or yarn package manager

### Backend Setup
```bash
cd backend
npm install
```

### Configure Environment Variables
Create `.env` file in backend directory:
```
MONGODB_URI=mongodb://localhost:27017/visualization_dashboard
```

### Import Data to MongoDB
```bash
cd backend
node src/seed.js
```

### Start Backend Server
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
```

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173` or `http://localhost:5174`

## 🌐 Access Points

- **Dashboard**: http://localhost:5173/ (or 5174)
- **Insights Page**: http://localhost:5173/insights
- **Analytics Page**: http://localhost:5173/analytics
- **API Endpoint**: http://localhost:5000/api/insights

## 📊 Dashboard Features

### Main Dashboard (/)
- KPI Cards with key metrics
- Interactive Filters
- Combined Charts + Data Table

### Insights Page (/insights)
- Complete data table with all insights
- Overview statistics
- Searchable and filterable data

### Analytics Page (/analytics)
- All 8 interactive charts
- Data visualizations
- Analytics insights

## 🔧 API Endpoints

### GET /api/insights
Returns all insights from MongoDB database

**Response:**
```json
[
  {
    "_id": "string",
    "end_year": "string",
    "intensity": number,
    "sector": "string",
    "topic": "string",
    "insight": "string",
    "url": "string",
    "region": "string",
    "start_year": "string",
    "impact": "string",
    "added": "string",
    "published": "string",
    "country": "string",
    "city": "string",
    "relevance": number,
    "pestle": "string",
    "swot": "string",
    "source": "string",
    "title": "string",
    "likelihood": number,
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive**: Works on desktop, tablet, and mobile
- **Interactive**: Hover effects, smooth transitions
- **Accessible**: Proper color contrast and typography
- **Performance**: Optimized data fetching and rendering

## 📈 Data Statistics

- **Total Insights**: 1000 records
- **Data Source**: Provided JSON file
- **Database**: MongoDB
- **Fields**: 20+ data fields per record

## ✅ Assignment Compliance

All assignment requirements have been successfully implemented:

1. ✅ Used given JSON data only
2. ✅ Created MongoDB database
3. ✅ Used MERN stack (Node.js + React)
4. ✅ Used D3.js for visualizations
5. ✅ Visualized all required variables
6. ✅ Implemented all required filters
7. ✅ Created API to get data from MongoDB
8. ✅ Interactive graphs and charts
9. ✅ Creative visualizations
10. ✅ Professional dashboard design

## 🎯 Ready for Submission

The project is complete and ready for submission. All requirements from the assignment have been met and the dashboard is fully functional with:

- Working backend API
- Interactive frontend
- Real data from MongoDB
- All required visualizations
- All required filters
- Professional design
- Multiple pages
- Responsive layout

## 📝 Notes

- Data is imported from the provided JSON file
- MongoDB connection uses environment variables
- Frontend uses React Router for navigation
- Charts are built with D3.js for interactivity
- All filters work together for combined filtering
- Design follows modern UI/UX principles