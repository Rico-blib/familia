import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Profile.css";
import { Search } from "@material-ui/icons";
import Portfolio from "../../Components/Portfolio/Portfolio";
import ProfileModal from "../../Components/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest";
import Navbar from "../../Components/Navbar/Navbar";

const Profile = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const [portfolios, setPortfolios] = useState({});
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchProfileUser = async () => {
      const portfolios = await UserApi.getPortfolios();
      setPortfolios(portfolios);
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        profileUser = await UserApi.getUser(profileUserId);
        portfolios = await UserApi.getPortfolios();
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user, editProfile]);
  //console.log("porfolios", portfolios);
  return (
    <div className="profile">
      <Header />
      <Navbar />
      <div className="profileCards">
        <div className="intro">
          <span>Check out family profiles </span>
          <div className="search">
            <input type="text" placeholder="Type Name" />
            <Search />
          </div>
          <span>Update Your Profile</span>
        </div>
      </div>
      {/* Mapping each Portfolio*/}
      <div className="manyProfiles">
        {portfolios.data?.map((portfolio) => {
          return (
            <div className="portfolio">
              <Portfolio
                portfolio={portfolio}
                setEditProfile={setEditProfile}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
