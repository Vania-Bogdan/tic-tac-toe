import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
    color: "",
    toggle: () => {},
})

export default ThemeContext;

export function ThemeProvider (props) {
  // keeps state of the current theme
    const [color, setColor] = useState("black");

  // paints the app before it renders elements
    useLayoutEffect(() => {
        if (color === "black") {
            applyTheme(blackTheme);
        } else if(color === "white") {
            applyTheme(whiteTheme);
        } 
    // if state changes, repaints the app
    }, [color]);

  // rewrites set of css variablels/colors
    const applyTheme = theme => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const toggle = event => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';
        //reriting the color
        let data = event.target.getAttribute('data')
        setColor(data)
    };

    return (
        <ThemeContext.Provider value={{
        color,
        toggle,
        }}>
        {props.children}
        </ThemeContext.Provider>
    )
}


// styles
const whiteTheme = [
    '--lines-symbol-text-border: rgba(0,0,0)',
    '--bg: rgba(190, 190, 190)',
    '--btn: rgba(150, 150, 150)',
    '--btn-hover: rgba(55, 55, 55)',
];

const blackTheme = [
    '--lines-symbol-text-border: rgba(255, 255, 255)',
    '--bg: rgba(33, 33, 33)',
    '--btn: rgba(0, 0, 0)',
    '--btn-hover: rgb(200, 200, 200)',
];