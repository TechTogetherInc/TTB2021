import React from "react";

import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Sponsors from "../components/sponsors";
import Faq from "../components/faq";
import Schedule from "../components/schedule";
import GetInvolved from "../components/getInvolved";
import Challenges from "../components/challenges";
import Footer from "../components/footer";

import "../styles/theme.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Challenges />
      <Faq />
      {/* <Schedule /> */}
      <Sponsors />
      <GetInvolved />
      <Footer />
    </Layout>
  )
}

export default IndexPage;
