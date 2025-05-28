import React from 'react';
import MyImage from '../images/mm-t.png';

const AnatomySection = () => (
  <div className="body-section">
      <h1>Dashboard</h1>
    <div className="human-body">
      <img src={MyImage} alt="Human Anatomy" />
      <div className="body-indicators">
        <div className="indicator healthy-heart">
          <span className="indicator-icon">❤️</span>
          <span>Healthy Heart</span>
        </div>
        <div className="indicator healthy-leg">
          <span>Healthy Leg</span>
        </div>
      </div>
    </div>
  </div>
);

export default AnatomySection;
