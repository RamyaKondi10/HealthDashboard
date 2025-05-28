// import React from 'react';
// import AppointmentCard from './AppointmentCard'; // reusable card

// const CalendarSection = () => {
//   const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
//   const calendarData = [
//     { day: 25, times: ['10:00', '11:00', '12:00'] },
//     { day: 26, times: ['08:00', '09:00', '10:00'], highlight: '09:00' },
//     { day: 27, times: ['12:00', '13:00'] },
//     { day: 28, times: ['10:00', '11:00'], highlight: '11:00' },
//     { day: 29, times: ['14:00', '15:00', '16:00'] },
//     { day: 30, times: ['09:00', '15:00'], active: true },
//     { day: 31, times: ['11:00'] },
//   ];

//   return (
//     <div className="calendar-section">
//       <div className="calendar-header">
//         <span className="this-week">This Week</span>
//         <div className="month-navigation">
//           <span className="month-year">October 2021</span>
//           <div className="nav-arrows">
//             <span className="nav-arrow">‹</span>
//             <span className="nav-arrow">›</span>
//           </div>
//         </div>
//       </div>

//       <div className="calendar-grid">
//         <div className="calendar-day-headers">
//           {weekDays.map((day) => (
//             <span key={day}>{day}</span>
//           ))}
//         </div>

//         <div className="calendar-days">
//           {calendarData.map((day, index) => (
//             <div
//               key={index}
//               className={`calendar-day ${day.active ? 'active' : ''}`}
//             >
//               <span className="day-number">{day.day}</span>
//               <div className="day-times">
//                 {day.times.map((time) => (
//                   <span
//                     key={time}
//                     className={time === day.highlight ? 'time-highlight' : ''}
//                   >
//                     {time}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Appointment Cards */}
//       <div className="appointment-cards row">
//         <div className="col-lg-4">
//           <AppointmentCard
//             icon="🦷"
//             title="Dentist"
//             time="09:00–11:00"
//             doctor="Dr. Cameron Williamson"
//             type="dentist"
//           />
//         </div>
//         <div className="col-lg-8">
//           <AppointmentCard
//             icon="💪"
//             title="Physiotherapy"
//             time="11:00–12:00"
//             doctor="Dr. Kevin Ijones"
//             type="physiotherapy"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarSection;
import React from 'react';
import AppointmentCard from './AppointmentCard';
import { weekDays, calendarDays } from '../data/calendarData';
import { appointments } from '../data/appointments';

const CalendarSection = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <span className="this-week">This Week</span>
        <div className="month-navigation">
          <span className="month-year">October 2021</span>
          <div className="nav-arrows">
            <span className="nav-arrow">‹</span>
            <span className="nav-arrow">›</span>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-day-headers">
          {weekDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="calendar-days">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day.active ? 'active' : ''}`}
            >
              <span className="day-number">{day.day}</span>
              <div className="day-times">
                {day.times.map((time) => (
                  <span
                    key={time}
                    className={time === day.highlight ? 'time-highlight' : ''}
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Cards */}
      <div className="appointment-cards row">
        {appointments.map((appt, idx) => (
          <div className={appt.columnSize} key={idx}>
            <AppointmentCard
              icon={appt.icon}
              title={appt.title}
              time={appt.time}
              doctor={appt.doctor}
              type={appt.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;
