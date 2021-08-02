import React, { useState } from "react";
import DynamicLink from "./dynamicLink.js";
import NavLinks from "../../data/navLinks.json";
import techtogetherLogo from "../../images/techtogetherWhite.png";
import navHamburger from "../../images/navHamburger.png";
import navExit from "../../images/navExit.png";

const NavMobile = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  function toggleMenu() {
    setNavOpen(!isNavOpen);
  }

  return (
    <nav id="navMobile">
      <a 
        id="mlh-trust-badge"
        style={{
            display: "block", 
            maxWidth: "100px", 
            minWidth: "60px", 
            position: "fixed", 
            left: "1%", 
            top: "0", 
            width: "9%", 
            zIndex: "10000",
        }} 
        href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" 
        target="_blank"
    >
            <img 
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" 
                alt="Major League Hacking 2021 Hackathon Season" 
                style={{ width: "100%" }} 
            />
    </a>

    <div className="navMobileContainer">
        <DynamicLink to="/" className="navLogo">
            <img
                src={techtogetherLogo}
                alt="TechTogether Boston Logo"
                style={{ width: 150, marginTop: "5px" }}
            />
        </DynamicLink>
        <button onClick={toggleMenu} className="navMobileIcon">
            <i className={isNavOpen ? "opened" : "closed"} />
            <img
                className="navMobileHamburger"
                src={navHamburger}
                alt="hamburger symbol for navbar"
                style={isNavOpen ? { display: "none" } : { display: "block" }}
            />
            <img
                className="navMobileExit"
                src={navExit}
                alt="exit symbol for navbar"
                style={isNavOpen ? { display: "block" } : { display: "none" }}
            />
        </button>
    </div>

      <ul
        className="navMobileMenu"
        style={isNavOpen ? { display: "block" } : { display: "none" }}
      >
        {NavLinks.map((link, index) => {
          return (
            <li key={`navItem${index}`} className="navMobileItem">
              <DynamicLink
                className="navMobileLink"
                to={link.path}
                onClick={toggleMenu}
              >
                {link.name}
              </DynamicLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;