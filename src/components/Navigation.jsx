import React, { Component } from "react";
import {Link} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "../assets/menu.png";
import Row from 'react-bootstrap/Row';


class HomeFooter extends Component {
    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render(){
        const { width } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <div className="mobile-nav">
                    <div><img className = "icon-menu-nav" src = {MenuIcon} alt = "menuIcon"/> 
                     </div>
                     <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 150 }>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <Link to="/">HOME</Link>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#about">ABOUT</a>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#start">START</a>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#contact">CONTACT</a>
                         </p>
                     </Menu>
                </div>
            )
        
    }else{
        return(
            <Row className = "home-header-container">
                <div className= "nav">
                    <Link to="/">HOME</Link>
                    <a href = "#about">ABOUT</a>
                    <a href = "#start">START</a>
                    <a href = "#contact">CONTACT</a>
                </div>
            </Row>
            )
        }
    }
}

export default HomeFooter;