import React, { useEffect, useState } from "react";
import "./Events.css";
import mine from "../../img/notice.jpeg";
import third from "../../img/notice2.jpeg";
import fourth from "../../img/notice3.jpeg";
import Card from "../Card/Card";
import axios from "axios";

const Events = () => {
  const [notices, setNotices] = useState({});
  useEffect(() => {
    const fetchNotices = async () => {
      const notices = await axios.get("http://localhost:5000/event");
      setNotices(notices);
    };
    fetchNotices();
  }, []);

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
              {notices.data?.map((notice, index) => (
                <li>{notice.notice}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/*left side */}
      <div className="upcomingEvent">
        <h1>Upcoming Events</h1>
        <div className="eImages">
          <img src={third} alt="" />
          <img src={mine} alt="" />
          <img src={fourth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Events;
