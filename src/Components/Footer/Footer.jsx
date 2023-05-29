import { Facebook, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contacts">
        <span>wainaincous@gmail.com</span>
        <div className="icons">
          <Facebook style={{fontSize:'45px'}}/>
          <Twitter style={{fontSize:'45px'}} />
          <WhatsApp style={{fontSize:'45px'}}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
