// File: src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './styles/Header.css'
import './styles/Sidebar.css';
import './styles/Activity.css'
import './App.css';


import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
        {/* Dashboard main content goes here */}
      </div>
    </div>
  );
};

export default App;