import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import UpcomingSchedule from './UpcomingSchedule'
import CalendarSection from './CalendarSection';
 


const DashboardMainContent = () => (
  <div className="content-grid">
    <div className="row">
      {/* Left Column: Anatomy */}
      <div className="col-lg-7 col-md-7 col-sm-12">
        <div className="left-column">
          <AnatomySection />
        </div>
      </div>

      {/* Right Column: Health Cards */}
      <div className="col-lg-5 col-md-5 col-sm-12">
        <div className="right-column">
          <HealthStatusCards />
        </div>
      </div>
      <div className="right-column">
          <ActivityFeed />
        </div>
    </div>

    <div className="row">
      {/* Left Column: Activity Feed */}
      <div className="col-lg-12">
        <CalendarSection />
      </div>

      {/* Right Column: Upcoming Schedule */}
      <div className="col-lg-12">
        <div className="right-column">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  </div>
);

export default DashboardMainContent;
