import React, { useState } from "react";
import "./dashboard.css";
import { FaBuildingUser } from "react-icons/fa6";
import companyNews from "../../utils/companyNews";
import Card from "../../components/card/Card"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Dashboard = () => {

  const [ currentNews, setCurrentNews] = useState(0);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__top">
          <FaBuildingUser size={25} />
          <p>Welcome, user. Please caliberate through sections according to your need.</p>
        </div>
        <div className="dashboard__bottom">
          <h1 className="gradient">Company News</h1>
          {/* floating news cards */}
          <div className="dashboard__bottom--cards">
            {/* <BsArrowLeftCircleFill className="arrow arrow-left"/> */}
            {
              companyNews && companyNews.length ? 
              companyNews.map((item)=>{
                return <Card
                heading={item.heading}
                content={item.content}
                className={currentNews===item.id?"current-slide":"current-slide inactive-slide"}
                />
              })
              :null
            }
            {/* <BsArrowRightCircleFill className="arrow arrow-right" /> */}
            {/* <div className="circle-indicators">
              {
                companyNews && companyNews.length ? 
                companyNews.map((_,i)=>(
                  <button
                  className={currentNews===i?"current-indicator":"current-indicator inactive-indicator"}
                  ></button>
                ))
                :null
              }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
