import React from "react";
import "./Events.css";
import mine from "../../img/e2.JPG";
import third from "../../img/e3.JPG"
import Card from "../Card/Card";

const Events = () => {
  return (
    <div className="events">
      {/*right side */}
      <div className="noticeBoard">
        <div className="board">
          <div className="text">
            <span style={{ fontSize: "2rem" }}>Notice Board</span>
          </div>
          <div className="list">
            <ul className="type">
              <li>Money to be collected on monday</li>
              <li>Remember to visit kajiado</li>
              <li>Minutes date have been changed</li>
            </ul>
          </div>
        </div>
      </div>
      {/*left side */}
      <div className="upcomingEvent">
        <h1>Upcoming Events</h1>
        <div>
          <Card img={mine} detail={"End year party"} date={"17/03/2023"} />
        </div>
        <div>
          <Card img={third} detail={"End year party"} date={"18/03/2023"} />
        </div>
      </div>
    </div>
  );
};

export default Events;
