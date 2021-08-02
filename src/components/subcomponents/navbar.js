import React from "react";
import DynamicLink from "./dynamicLink";
import NavLinks from "../../data/navLinks.json";
import techtogetherLogo from "../../images/techtogetherWhite.png";

const Nav = () => (
  <nav id="nav">
    <DynamicLink to="/" className="navLogo">
        <img
            src={techtogetherLogo}
            alt="TechTogether Logo"
            style={{ width: 200, marginTop: "5px" }}
        />
    </DynamicLink>

    <ul className="navMenu">
      {NavLinks.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="navItem">
            <DynamicLink className="navLink" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>

    <a
      id="mlh-trust-badge"
      style={{
        display: "block",
        maxWidth: "130px",
        minWidth: "60px",
        position: "fixed",
        right: "50px",
        top: "0",
        width: "9%",
        zIndex: "10000",
      }}
      href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
        alt="Major League Hacking 2022 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  </nav>
);

export default Nav;