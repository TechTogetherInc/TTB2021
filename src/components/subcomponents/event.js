import React, { useState } from "react";

const Event = ({color, time, type, title, host, description}) => {
    const [showDescription, setshowDescription] = useState(false);
    const toggle = () => {
        setshowDescription(!showDescription);
    };

    return (
        <div className="eventContainer">
            <div className="event">
                <div className="eventLeft" style={{ backgroundColor: color }}>
                    <div className="eventTime">{time}</div>
                    <div className="eventType">{type}</div>
                </div>
                <div className="eventRight">
                    <div className="eventTitle">{title}</div>
                    <div className="eventHost">with {host}</div>
                </div>
            </div>

            <div className="eventDescription" style={showDescription ? { display: "block", backgroundColor: color } : { display: "none" }}>
                {description}
            </div>
        </div>
    );
}

export default Event;