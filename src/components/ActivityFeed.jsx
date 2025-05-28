import React from 'react';


const ActivityFeed = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const barData = [
    [60, 30, 45],
    [50, 15, 70],
    [70, 10, 35],
    [65, 25, 50],
    [60, 20, 40],
    [75, 55, 45],
    [50, 40, 30],
  ];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h4>Activity</h4>
        <span className="appointments-summary">3 appointments this week</span>
      </div>
      <div className="activity-chart">
        {barData.map((bars, index) => (
          <div className="activity-day" key={index}>
            <div className="bars-horizontal">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i + 1}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className="day-label">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
