import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import {
  Dashboard,
  Profile,
  Refer,
  Leave,
  Salary,
  Settings,
  Rewards,
  Logic,
} from "./containers";

const SIDEBAR_ITEMS = {
  DASHBOARD: 1,
  PROFILE: 2,
  REFER: 3,
  LEAVE: 4,
  SALARY: 5,
  SETTINGS: 6,
  REWARDS: 7,
  LOGIC: 8,
};

const employee = {
  image:
    "https://thumb.photo-ac.com/96/96966e2cbb19a3866ae87835e0a55f9a_t.jpeg",
  firstName: "Abhinay",
  lastName: "Shambharkar",
  age: 23,
  address: "manish nagpur, 440037",
  email: "abhinayshambharkar1@gmail.com",
  contactNumber: "9999988888",
  dob: "24/05/2002",
};

const App = () => {
  const [selectedSidebarIcon, setSelectedSidebarIcon] = useState(1);

  const renderPage = () => {
    switch (selectedSidebarIcon) {
      case SIDEBAR_ITEMS.DASHBOARD:
        return <Dashboard />;
      case SIDEBAR_ITEMS.PROFILE:
        return <Profile employee={employee} />;
      case SIDEBAR_ITEMS.REFER:
        return <Refer />;
      case SIDEBAR_ITEMS.LEAVE:
        return <Leave />;
      case SIDEBAR_ITEMS.SALARY:
        return <Salary />;
      case SIDEBAR_ITEMS.SETTINGS:
        return <Settings />;
      case SIDEBAR_ITEMS.REWARDS:
        return <Rewards />;
      case SIDEBAR_ITEMS.LOGIC:
        return <Logic />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="horizontalBar"></div>
      <div className="homePage">
        <Sidebar
          selectedSidebarIcon={selectedSidebarIcon}
          setSelectedSidebarIcon={setSelectedSidebarIcon}
        />
        <div className="feed">{renderPage()}</div>
      </div>
    </div>
  );
};

export default App;
