import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      {/*left side*/}
      <div className="l-side">
        <div className="logo">
          <div></div>
          <span>learn. enjoy. serve. respect</span>
        </div>
      </div>
      {/*Right side*/}
      <div className="r-side">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/home"}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/profile"}
            >
              Profiles
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/family"}
            >
              FamilyTree
            </Link>
          </li>
          <li>
          <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/album"}
            >
              FamilyAlbum
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/history"}
            >
              History&Traditions
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/auth"}
            >
              <button className="button">Log Out</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
