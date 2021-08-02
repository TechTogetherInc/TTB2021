import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import tree from "../images/tree.png";

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      className={className}
      fluid={imageData}
    //   backgroundColor={`#040e18`}
    >
      <section id="about">
        <div className="aboutSubcontainer">
          <div className="aboutTextContainer">
            <h2>
                <span>Explore, dream, and discover. </span>
                <span>New adventures await.</span>
            </h2>
            <br />
            <p>
            We are excited to welcome you to TechTogether Boston 2021, which will be taking place virtually this year from September 10th - 12th. At TechTogether Boston, our mission is to empower all people of marginalized genders by providing opportunities to gain valuable skills and explore tech in an inclusive, inspiring, and engaging environment.
            
            <br/><br/>

            Our theme this season, New Adventures Await, is focused on exploration and getting outside your comfort zone. From expanding your skill set with our variety of workshops to learning about different career paths in STEM, we encourage you to set sail and join us as we embark on the next great adventure! Whether you’re a complete beginner or an experienced hacker, we’d love to see you virtually at TechTogether Boston 2021, open to all individuals of marginalized genders.
            </p>
          </div>
        </div>

        <div className="byteImages">
            <img src={tree} alt="tree picture" style={{width: 550, position: "absolute", bottom:"0", right:"0"}}/>
        </div>
      </section>
    </BackgroundImage>
  )
}

const About = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default About;