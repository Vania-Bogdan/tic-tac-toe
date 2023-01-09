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
        } else
        if (color === "white") {
            applyTheme(whiteTheme);
        } else
        if (color === "red") {
            applyTheme(redTheme);
        } else
        if (color === "green") {
            applyTheme(greenTheme);
        } else
        if (color === "blue") {
            applyTheme(blueTheme);
        } else
        if (color === "calm") {
            applyTheme(calmTheme);
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
    '--bg: rgba(190, 190, 190)',
    '--lines-symbol-text-border: rgba(30,30,30)',
    '--btn: rgba(150, 150, 150)',
    '--btn-hover: rgba(55, 55, 55)',
    '--current-box: rgba(120, 120, 120)',
    '--current-symbol: rgba(70, 70, 70)',
];

const blackTheme = [
    '--bg: rgba(33, 33, 33)',
    '--lines-symbol-text-border: rgba(255, 255, 255)',
    '--btn: rgba(0, 0, 0)',
    '--btn-hover: rgb(200, 200, 200)',
    '--current-box: rgba(100, 100, 100)',
    '--current-symbol: rgba(150, 150, 150)',
];

const redTheme = [
    '--bg: rgb(250, 80, 80)',
    '--lines-symbol-text-border: rgba(220, 220, 220)',
    '--btn: rgb(200, 40, 40)',
    '--btn-hover: rgb(200, 200, 200)',
    '--current-box: rgb(253, 115, 115)',
    '--current-symbol: rgb(255, 170, 170)',
];

const greenTheme = [
    '--bg: rgb(33, 146, 75)',
    '--lines-symbol-text-border: rgba(220, 220, 220)',
    '--btn: rgb(0, 100, 25)',
    '--btn-hover: rgb(200, 200, 200)',
    '--current-box: rgb(47, 202, 104)',
    '--current-symbol: rgb(109, 239, 157)',
];

const blueTheme = [
    '--bg: rgb(53, 105, 227)',
    '--lines-symbol-text-border: rgba(220, 220, 220)',
    '--btn: rgb(11, 67, 197)',
    '--btn-hover: rgb(200, 200, 200)',
    '--current-box: rgb(95, 143, 255)',
    '--current-symbol: rgb(122, 162, 255)',
];

const calmTheme = [
    '--bg: rgb(201,170,136)',
    '--lines-symbol-text-border: rgba(220, 220, 220)',
    '--btn: rgb(164,139,112)',
    '--btn-hover: rgb(200, 200, 200)',
    '--current-box: rgb(211,184,155)',
    '--current-symbol: rgb(220,198,174)',
];