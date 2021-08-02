import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/subcomponents/navbar";
import NavbarMobile from "../components/subcomponents/navbarMobile";

import "../styles/theme.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="TechTogether Boston 2021 Virtual"
      meta={[
        {
          name: "description",
          content:
            "Join us virtually on September 10 - 12, 2021 for Boston's largest gender-focused hackathon!",
        },
        {
          name: "keywords",
          content: "hackathon, boston, hackers, diversity, marginalized",
        },
      ]}

      htmlAttributes={{
        lang: 'en',
      }}
    />
    <Navbar />
    <NavbarMobile />
    <div>{children}</div>
  </div>
);

export default Layout;
