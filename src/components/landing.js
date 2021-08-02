import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import byteBalloon from "../images/byteBalloon.png"
import bytePurpleBalloon from "../images/bytePurpleBalloon.png"

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background1.png" }) {
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
      <section id="landing">
        <div className="landingSubcontainer">
          <div className="landingText">
            <div className="landingTextChild">
              <h2>TechTogether</h2>
              <h2>Boston</h2>
              <div className="landingInfo">
                <p>September 10 - 12, 2021 &nbsp; | &nbsp; Virtual 💻</p>
                <p>Boston's largest Gender-Focused Hackathon</p>
                <br/>
                <p>Join us for our 5-year anniversary!</p>

                <br/><br/>
                <a type="button" href="https://www.eventbrite.com/e/153573481417" target="_blank" rel="noreferrer">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div className="byteImages" style={{position: "relative"}}>
            <img src={bytePurpleBalloon} alt="byte-images with balloons" style={{width: 175, position: "absolute",bottom:"0", right:"0"}}/>
          </div>

          <div className="byteImages">
            <img src={byteBalloon} alt="byte-images" style={{width: 175}}/>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

const Landing = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default Landing;