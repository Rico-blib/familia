import React, { useEffect, useState } from "react";
import "./FamilyTree.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import House from "../../Components/House/House";
import Navbar from "../../Components/Navbar/Navbar";
import { Search } from "@material-ui/icons";
import HouseForm from "../../Components/HouseForm/HouseForm";
import { Modal, useMantineTheme } from "@mantine/core";
import axios from "axios";

const FamilyTree = () => {

  const [openForm, setOpenForm] = useState(false);
  const [houses, setHouses] = useState({});
  const [editHouse, setEditHouse] = useState(false)
  const theme = useMantineTheme();

  useEffect( () => {
    const fetchHouses = async () => {
      const houses = await axios.get("http://localhost:5000/house/record");

      setHouses(houses);
    };
    fetchHouses();
  }, [openForm, editHouse]);

  return (
    <div className="familytree">
      <Header />
      <Navbar />
      <div className="profileCards">
        <div className="intro">
          <span>Check out family Records </span>
          <div className="search">
            <input type="text" placeholder="Type Name" />
            <Search />
          </div>
          <span>Add and Update Your Family House</span>
          <div>
            <button className="btn one" onClick={() => setOpenForm(true)}>
              Add House 
            </button>
            <HouseForm openForm={openForm} setOpenForm={setOpenForm} />
          </div>
        </div>
      </div>
      <div className="housePage">
        {houses.data?.map((house, index) => {
          return <House house={house} key={index} setEditHouse={setEditHouse}/>;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default FamilyTree;
