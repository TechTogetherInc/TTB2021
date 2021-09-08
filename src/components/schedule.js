import React, { useState } from "react";
import Event from "./subcomponents/event";

import friday from "../data/schedule/friday.json";
import saturday from "../data/schedule/saturday.json";
import sunday from "../data/schedule/sunday.json";

const Schedule = () => {
    const schedules = [{
        "name": "Friday",
        "date": "09/10",
        "schedule": friday
    }, {
        "name": "Saturday",
        "date": "09/11",
        "schedule": saturday
    },
    {
        "name": "Sunday",
        "date": "09/12",
        "schedule": sunday
    }];

    const typeToColorMapping = {
        "Team Formation": "#FCCCFD", // pink
        "Workshop": "#CCD2FC", // purple
        "Activity": "#FDFBCD", // yellow 
        "Panel": "#FDE3CD" // orange
    };

    const [scheduleIndex, setScheduleIndex] = useState(0);
    
    const leftClick = () => {
        setScheduleIndex((((scheduleIndex - 1) % 3) + 3) % 3);
    }

    const rightClick = () => {
        setScheduleIndex((scheduleIndex + 1) % 3);
    }

    return (
        <section id="schedule">
            <div className="scheduleSubcontainer">
                <h2>Schedule</h2>
                <h3>All times are in EDT</h3>

                <div className="dateContainer">
                    <div className="arrow" onClick={leftClick}><span className="leftArrow">&#9664;</span></div>
                    <div className="dateSubcontainer">
                        <p>{schedules[scheduleIndex].name}</p>
                        <p>{schedules[scheduleIndex].date}</p>
                    </div>
                    <div className="arrow" onClick={rightClick}><span className="rightArrow">&#x25B6;</span></div>
                </div>

                <div className="eventsContainer">
                    {schedules[scheduleIndex].schedule.map((data) => (
                        <Event 
                            color={typeToColorMapping[data.type]}
                            type={data.type} 
                            time={data.time} 
                            title={data.title} 
                            host={data.host} 
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Schedule;
  