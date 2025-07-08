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
} from "./containers";

const SIDEBAR_ITEMS = {
  DASHBOARD: 1,
  PROFILE: 2,
  REFER: 3,
  LEAVE: 4,
  SALARY: 5,
  SETTINGS: 6,
  REWARDS: 7,
};

const employee = {
  image:
    "https://media.licdn.com/dms/image/v2/D4D03AQGV2UJ7cB8ndg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700764478678?e=2147483647&v=beta&t=S516um56Gf2EhkcqOMoNoJ68_WJW_RHKO89dk-dT5-Q",
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
