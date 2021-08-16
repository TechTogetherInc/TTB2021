import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Image from "./subcomponents/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import challengesData from "../data/challenges.json";

const BackgroundSection = ({className}) => {
    const data = useStaticQuery(
        graphql`
        query {
            desktop: file(relativePath: { eq: "background4.png" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1000) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
        `
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const imageData = data.desktop.childImageSharp.fluid

    return (
        <BackgroundImage
        className={className}
        fluid={imageData}
        //   backgroundColor={`#040e18`}
        >
            <section id="challenges">
                <div className="challengesSubcontainer">
                    <h2>Challenges</h2>

                    <div className="challengesBody">
                        <Slider {...settings}>
                        {challengesData.map(data => 
                            <div className="challengesSlide" key={data.challenge}>
                                <div className="challengesImage">
                                    <Image filename={data.image} alt="byte-images" />
                                </div>
                                <div className="challengesText">
                                    <p className="challengesTitle">{data.challenge}</p>
                                    <p className="challengesDescription">{data.description}</p>
                                </div>
                            </div>
                        )}
                        </Slider>
                    </div>
                    
                    <a href="https://quiz.tryinteract.com/#/611197e7a9f3430017b6c2f4" target="_blank" rel="noreferrer">
                        <div className="challengesQuiz">
                            Take a Quick Quiz to Determine Which Track is Right For You!
                        </div>
                    </a>
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