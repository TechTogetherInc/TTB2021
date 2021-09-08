import React, { useState } from "react";

const Event = ({color, time, type, title, host, description}) => {
    const [showDescription, setshowDescription] = useState(false);
    const toggle = () => {
        setshowDescription(!showDescription);
    };

    return (
        <div className="eventContainer">
            <div className="event" onClick={toggle}>
                <div className="eventLeft" style={{ backgroundColor: color }}>
                    <div className="eventTime">{time}</div>
                    <div className="eventType">{type}</div>
                </div>
                <div className="eventRight">
                    <div className="eventTitle">{title}</div>
                    <div className="eventHost">with {host}</div>

                    <div className="svgContainer">
                        <svg viewBox="0 0 24 24">
                            {showDescription ? (
                            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                            ) : (
                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                            )}
                        </svg>
                    </div>
                </div>

            </div>

            <div className="eventDescription" style={showDescription ? { display: "block", backgroundColor: color } : { display: "none" }}>
                {description}
            </div>
        </div>
    );
}

export default Event;