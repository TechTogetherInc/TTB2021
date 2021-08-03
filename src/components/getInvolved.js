import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Dropdown from "./subcomponents/dropdown";
import Image from "./subcomponents/image";

import getInvolvedData from "../data/getInvolved.json";

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
                    {getInvolvedData.map((data) => (
                        <div className="getInvolvedComponent">
                            <div className="byteImages">
                                <Image filename={data.image} alt="byte-images"/>
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