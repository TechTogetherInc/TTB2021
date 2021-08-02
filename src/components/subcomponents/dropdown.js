import React, { useState } from "react";

const Dropdown = ({header, body}) => {
    const [showBody, setshowBody] = useState(false);
    const toggle = () => {
        setshowBody(!showBody);
    };

    return (
        <dt className="dropdownContainer">
            <button onClick={toggle}>
                <div className="headerContainer">
                    <div>
                        {header}
                    </div>
                    <div className="svgContainer">
                        <svg viewBox="0 0 24 24">
                            {showBody ? (
                            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                            ) : (
                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                            )}
                        </svg>
                    </div>
                </div>
                    {/* appears to show body */}
                    <dd style={showBody ? { display: "block" } : { display: "none" }}>
                        <span dangerouslySetInnerHTML={{ __html: body }}></span>
                    </dd>
            </button>
        </dt>
    );
}

export default Dropdown;