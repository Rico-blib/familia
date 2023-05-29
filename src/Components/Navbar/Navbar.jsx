import React from 'react'
import './Navbar.css'
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
            <li>Home</li>
            <li>Profiles</li>
            <li>FamilyTree</li>
            <li>History&Traditions</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar