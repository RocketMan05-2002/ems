import React from "react";
import "./sidebar.css";
import sidebarIcons from "../../utils/sidebarIcons";
const Sidebar = ({ selectedSidebarIcon, setSelectedSidebarIcon}) => {
  return (
    <div className="sidebar">
      <div className="sidebarIcons">
        {sidebarIcons && sidebarIcons.length
          ? sidebarIcons.map((item, ind) => {
              ind = ind+1; // we are operating on 1 based indexing
              return (
                <div className={`sidebarIcon ${selectedSidebarIcon===ind?"selected":""} `} onClick={()=>setSelectedSidebarIcon(ind)}>
                  <span>{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Sidebar;
