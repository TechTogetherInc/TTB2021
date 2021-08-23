import React from "react";

import Image from "./subcomponents/image";
import socials from "../data/socials.json";


const Footer = () => (
    <section id="footer">
        <div className="footerSubcontainer">
            <h2>Keep in Touch</h2>
            <p> Follow us on social media! If you have any questions, feel free to contact us.</p>
        
            <div className="socials">
                {socials.map(social => 
                    <div className="icon" key={social.link}>
                        <a href={social.link} target="_blank" rel="noreferrer">
                            <Image filename={social.image} alt={social.name} />
                        </a>
                    </div>
                )}
            </div>

            <a className="codeOfConduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">Code of Conduct</a>
        </div>
    </section>
);

export default Footer;
  