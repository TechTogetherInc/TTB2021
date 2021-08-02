import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Dropdown from "./subcomponents/dropdown";
import byteViolet from "../images/byteViolet.png";
import bytePurple from "../images/bytePurple.png";
import byteTan from "../images/byteTan.png";
import byteBlue from "../images/byteBlue.png";
import byteLilac from "../images/byteLilac.png";
import bytePink from "../images/bytePink.png";

const byteData = [
    {
        "image": byteViolet,
        "header": "Become a Sponsor",
        "body": "Each year TechTogether Boston works with top companies to help them tap into the Boston talent market.",
        "link": "https://techtogether.typeform.com/to/B7gH63j2"
    },
    {
        "image": bytePurple,
        "header": "Register to Hack",
        "body": "Come to hack or just come to learn at TechTogether Boston's fifth-ever hackathon!",
        "link": "https://www.eventbrite.com/e/153573481417"
    },
    {
        "image": byteTan,
        "header": "Resource Request",
        "body": "Need some help partaking in the hackathon? Let us know how we can help you.",
        "link": "https://techtogether.typeform.com/to/lnjbcCU2"
    },
    {
        "image": byteBlue,
        "header": "Mentor Hackers",
        "body": "Help our hackers brainstorm project ideas and squash mean programming bugs.",
        "link": "https://techtogether.typeform.com/to/NBbK6BRk"
    },
    {
        "image": byteLilac,
        "header": "Host a Workshop",
        "body": "Come teach our hackers important skills that will inspire them to learn more after the hackathon.",
        "link": "https://techtogether.typeform.com/to/uZjK1EE2"
    },
    {
        "image": bytePink,
        "header": "Judge Projects",
        "body": " Help TechTogether select the winning projects for each of our challenges. This is a volunteering opportunity with those that only have 2-3 hours available to help out.",
        "link": "https://techtogether.typeform.com/to/On0EiMYP"
    }
];

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
        <section id="getInvolved">
            <div className="getInvolvedSubcontainer">
                <h2>Get Involved</h2>

                <div className="getInvolvedBody">
                    {byteData.map((data) => (
                        <div className="getInvolvedComponent">
                            <div className="byteImages">
                                <img src={data.image} alt="byte-images" style={{width: 80}}/>
                            </div>
                            <Dropdown
                                header={data.header}
                                body={data.body}
                                key={data.header}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    </BackgroundImage>
  )
}

const GetInvolved = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default GetInvolved;