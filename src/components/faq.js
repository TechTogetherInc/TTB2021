import React from "react";
import Dropdown from "./subcomponents/dropdown";
import faqData from "../data/faq.json";

const Faq = () => {
    return (
        <section id="faq">
            <div className="faqContainer">
                <h2>No Dumb Questions</h2>

                <div className="faqSubcontainer">
                    <div className="faqHalfContainer">
                        {faqData.map((data, index) => {
                            if (index <= Math.floor(faqData.length / 2)) {
                                return (
                                <Dropdown
                                    header={data.question}
                                    body={data.answer}
                                    key={data.question}
                                />)
                            }
                        })}
                    </div>
                    
                    <div className="faqHalfContainer" style={{verticalAlign: "top"}}>
                        {faqData.map((data, index) => {
                            if (index > Math.floor(faqData.length / 2)) {
                                return (
                                <Dropdown
                                    header={data.question}
                                    body={data.answer}
                                    key={data.question}
                                />);
                            } 
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Faq;