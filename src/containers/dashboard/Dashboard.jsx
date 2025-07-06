import React from "react";
import "./dashboard.css";
import { FaBuildingUser } from "react-icons/fa6";
import companyNews from "../../utils/companyNews"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__top">
          <FaBuildingUser size={25} />
          <p>Welcome, user. Please caliberate through sections according to your user case.</p>
        </div>
        <div className="dashboard__bottom">
          <h2>Company News</h2>
          {/* floating news cards */}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
