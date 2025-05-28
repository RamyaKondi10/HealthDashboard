import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="schedule-item">
    <div className="schedule-info">
      <span className="schedule-title">{title}</span>
      <span className="schedule-time">{time}</span>
    </div>
    <div className="schedule-icon">{icon}</div>
  </div>
);

export default SimpleAppointmentCard;
