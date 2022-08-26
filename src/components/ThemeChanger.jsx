import React from "react";
import "./css/styles.css"

class ThemeChanger extends React.Component{

    state = {
        color: ""
    }

    render() {
        return (
            <div className="theme-wraper">
                <div className="t-white"></div>
                <div className="t-white"></div>
                <div className="t-white"></div>
                <div className="t-white"></div>

            </div>
        )
    }
}

export default ThemeChanger