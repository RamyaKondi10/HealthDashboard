import React from 'react';

const AppointmentCard = ({ icon, title, time, doctor, type }) => (
  <div className={`appointment-card ${type}`}>
    <div className="appointment-icon">{icon}</div>
    <div className="appointment-info">
      <h4>{title}</h4>
      <span className="appointment-time">{time}</span>
      <span className="appointment-doctor">{doctor}</span>
    </div>
  </div>
);

export default AppointmentCard;
