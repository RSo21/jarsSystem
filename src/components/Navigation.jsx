import React from "react";
//import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";




const HomeFooter  = () => {

    return(
        <div className= "nav">
            <Link to="/">HOME</Link>
            <a href = "#about">ABOUT</a>
            <a href = "#start">START</a>
            <a href = "#contact">CONTACT</a>
        </div>
    )


}

export default HomeFooter;