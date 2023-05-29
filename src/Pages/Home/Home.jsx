import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Events from "../../Components/Events/Events";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Slider />
      <Events />
      <Footer/>
    </div>
  );
};

export default Home;
