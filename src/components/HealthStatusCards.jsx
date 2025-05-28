
import React from 'react';


const HealthStatusCards = () => {
  const cards = [
    {
      name: 'Lungs',
      date: '23 Oct 2021',
      level: 'red',
      percent: 85,
      icon: <i className="fas fa-lungs red-bone"></i>,
    },
    {
      name: 'Teeth',
      date: '23 Oct 2021',
      level: 'green',
      percent: 60,
      icon: ' 🦷',
    },
    {
      name: 'Bone',
      date: '24 Oct 2021',
      level: 'orange',
      percent: 40,
      icon: '🦴',
    }
  ];

  return (
    <div className="health-metrics">
   <select class="dropdown">
    <option>This Week</option>
    <option>This Month</option>
    <option>Last 3 Months</option>
  </select>
      {cards.map((card, i) => (
        <div className="metric-item" key={i}>
          <div className={`metric-icon ${card.level}`}>{card.icon}</div>
          <div className="metric-info">
            <span className="metric-name">{card.name}</span>
            <span className="metric-date">Date: {card.date}</span>
            <div className="metric-bar">
              <div
                className={`metric-progress ${card.level}`}
                style={{ width: `${card.percent}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <button className="details-btn">Details →</button>
    </div>
  );
};

export default HealthStatusCards;

