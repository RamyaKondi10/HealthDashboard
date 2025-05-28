import React from "react";


const Header = () => {
  return (
    <div className="header">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input type="text" placeholder="Search" />
        <i className="fas fa-bell bell-icon"></i>
      </div>

      <div className="header-right">
        <div className="avatar-circle">
          <img src="https://i.pravatar.cc/40" alt="User Avatar" />
        </div>
        <div className="add-button">
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
