import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ReactModal from "react-modal";

import Image from "./subcomponents/image";

import byteTelescope from "../images/byteTelescope.png";
import sponsorsData from "../data/sponsors.json";

ReactModal.setAppElement("#___gatsby");

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background3.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorLink, setSponsorLink] = useState("");
  const [sponsorBlurb, setSponsorBlurb] = useState("");

  const openModal = (name, link, blurb) => {
    if (blurb) {
      setSponsorName(name);
      setSponsorLink(link);
      setSponsorBlurb(blurb);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BackgroundImage
      className={className}
      fluid={imageData}
    //   backgroundColor={`#040e18`}
    >
      <section id="sponsors">
          <div className="sponsorsSubcontainer">
            <h2>Our Sponsors</h2>
            <h3>Click on each of our sponsors to learn more!</h3>

            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Sponsor Blurbs"
              className="Modal"
              overlayClassName="Overlay"
              scrollable={true}
            >
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "black", cursor: "pointer", display: "inline", fontSize: "30px" }} onClick={closeModal}>x</p>
              </div>
              <h1 style={{ marginBottom: "25px" }}>
                {(() => {
                  switch (sponsorLink) {
                    case "":   return sponsorName;
                    default:   return <a href={sponsorLink} target="_blank">{sponsorName}</a>
                  }
                })()}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: sponsorBlurb }}></div>
            </ReactModal>

            <div className="sponsorLogoContainer">
              {Array.from(Array(10).keys()).map(index => 
                <div className="sponsorLogoSubcontainer" key={index}>
                  {sponsorsData.map((data) => {
                    if (index === data.tier){
                      return (
                      <div className="sponsorLogo" key={data.sponsor} onClick={() => openModal(data.sponsor, data.link, data.blurb)}>
                        {/* <a href={data.link} target="_blank" rel="noreferrer"> */}
                          <Image filename={data.logo} alt="byte-images" />
                        {/* </a> */}
                      </div>
                      )
                    }
                  })}
                </div>
              )}
            </div>

            <div className="byteImages">
                <img src={byteTelescope} alt="byte-image-with-telescope" style={{width: 175, position: "absolute", bottom:"0", right:"0"}}/>
            </div>
          </div>
      </section>
    </BackgroundImage>
  )
}

const Sponsors = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default Sponsors;