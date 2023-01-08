import React, { useContext } from "react";
import "./css/styles.css"

import ThemeContext from "context/ThemeContext";

export default function Switch () {
    const { toggle } = useContext(ThemeContext);

    return (
        <div className="theme-wraper">
            <div className="t-white" data="white" 
        onClick={(e) => toggle(e)}></div>
            <div className="t-black" data="black" 
        onClick={(e) => toggle(e)}></div>
        </div>
    );
} 