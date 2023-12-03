import { Facebook, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contacts">
        <span>wainaincous@gmail.com</span>
        <div className="icons">
          <Facebook style={{fontSize:'45px', color:'blue'}} />
          <Twitter style={{fontSize:'45px', color:'orange'}} />
          <WhatsApp style={{fontSize:'45px',color: 'green'}}/>
        </div>
        <span> Contact: <span color="white">+254757117792</span></span>
      </div>
    </div>
  );
};

export default Footer;
