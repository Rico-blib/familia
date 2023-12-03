import React from "react";
import "./Portfolio.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProfileModal from "../../Components/ProfileModal/ProfileModal";

const Portfolio = ({ portfolio, setEditProfile }) => {
  // const {user} = useSelector((state) => state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="container">
      <div className="pimg">
        <img
          src={
            portfolio.coverPicture
              ? serverPublic + portfolio.coverPicture
              : serverPublic + "defaultCover.png"
          }
        />
        <img
          src={
            portfolio.profilePicture
              ? serverPublic + portfolio.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt=""
        />
      </div>
      <div className="content">
        <span>
          {portfolio.firstname} {portfolio.lastname}{" "}
        </span>
        <span>{portfolio.profession}</span>
        <span>{portfolio.phone}</span>
        <span>{portfolio.email}</span>
      </div>
      <div className="updatebtn">
        <button className="button one" onClick={() => setModalOpened(true)}>
          Update Me
        </button>
        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          data={portfolio}
          setEditProfile={setEditProfile}
        />
      </div>
    </div>
  );
};

export default Portfolio;
