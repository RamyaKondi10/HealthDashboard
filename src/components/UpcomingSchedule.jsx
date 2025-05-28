import React from 'react';
import { upcomingAppointments } from '../data/upcomingAppointments';
import { appointmentIcons } from '../data/appointmentIcons';


const UpcomingSchedule = () => {
  return (
    <div className="schedule-section container">
      <h3>Upcoming Appointments</h3>
      {upcomingAppointments.map(({ day, events }) => (
        <div className="schedule-day" key={day}>
          <h4>{day}</h4>
          <div className="row g-3"> 
            {events.map(({ title, time, iconKey, colSize }) => (
              <div className={`${colSize}`} key={title}>
                <div className="schedule-item">
                 
                  <div className="schedule-info">
                    <div className="schedule-title">{title}</div>
                    <div className="schedule-time">{time}</div>
                  </div>
                  <div className="schedule-icon">{appointmentIcons[iconKey]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
