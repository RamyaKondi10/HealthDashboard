import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const generalNav = [
    { icon: 'fas fa-th-large', label: 'Dashboard', active: true },
    { icon: 'fas fa-history', label: 'History' },
    { icon: 'fas fa-calendar-alt', label: 'Calendar' },
    { icon: 'fas fa-notes-medical', label: 'Appointments' },
    { icon: 'fas fa-chart-bar', label: 'Statistics' },
    { icon: 'fas fa-vials', label: 'Tests' },
  ];

  const toolsNav = [
    { icon: 'fas fa-comments', label: 'Chat' },
    { icon: 'fas fa-question-circle', label: 'Support' },
    { icon: 'fas fa-cog', label: 'Setting' },
  ];

  return (
    <>
      {/* Hamburger icon only when sidebar is closed */}
      {!isOpen && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      )}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-text">Health</span>
            <span className="logo-accent">care.</span>
          </div>
          {/* Cancel icon only for small screens */}
          {window.innerWidth <= 1024 && (
            <button className="close-btn" onClick={toggleSidebar}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        <div className="nav-section-title">General</div>
        <nav className="nav-menu">
          {generalNav.map(({ icon, label, active }) => (
            <div key={label} className={`nav-item ${active ? 'active' : ''}`}>
              <i className={`nav-icon ${icon}`}></i>
              <span>{label}</span>
            </div>
          ))}
        </nav>

        <div className="nav-section-title">Tools</div>
        <nav className="nav-menu">
          {toolsNav.map(({ icon, label }) => (
            <div key={label} className="nav-item">
              <i className={`nav-icon ${icon}`}></i>
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
