import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

const socials = [
    {
        "name": "facebook",
        "image": facebook,
        "link": "https://www.facebook.com/TechTogetherBoston/"
    },
    {
        "name": "instagram",
        "image": instagram,
        "link": "https://www.instagram.com/techtogetherboston/"
    },
    {
        "name": "twitter",
        "image": twitter,
        "link": "https://twitter.com/techtogetherbos/"
    },
    {
        "name": "linkedin",
        "image": linkedin,
        "link": "https://www.linkedin.com/company/techtogetherboston/"
    },
]
const Footer = () => (
    <section id="footer">
        <div className="footerSubcontainer">
            <h2>Keep in Touch</h2>
            <p> Follow us on social media! If you have any questions, feel free to contact us.</p>
        
            <div className="socials">
                {socials.map(social => 
                    <div className="icon">
                        <a href={social.link} target="_blank" rel="noreferrer">
                            <img src={social.image} alt={social.name} />
                        </a>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
  export default Footer;
  