import React from "react";
import{NavLink} from 'react-router-dom';


export default function Navigation() {

return (
    <ul className="navbar">
        {/* <img src="troll-troll-face.gif" alt="logo" width="80px" height="80px" />
        <h1 className="Bejba">Kajna Krejza<hr></hr> Memes</h1> */}
        <li><NavLink to = ""> Start</NavLink></li>
        <li><NavLink to = "/hot"> Hot</NavLink></li>
        <li><NavLink to = "/regular"> Regular</NavLink></li>
        {/* <li><NavLink to = "*"> Error Page</NavLink></li> */}
    </ul>
    );
}
