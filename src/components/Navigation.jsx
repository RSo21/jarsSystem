import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "../assets/menu.png";
import Row from 'react-bootstrap/Row';


class Navigation extends Component {
    state = {
        width: window.innerWidth,
        navBackground: ""
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "transparent" : "rgba(255, 255, 255, 0.95)";
            this.setState({ 
                navBackground: backgroundcolor 
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };


    render(){
        const { width, navBackground } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <div className="mobile-nav">
                    <div><img className = "icon-menu-nav" src = {MenuIcon} alt = "menuIcon"/>
                     </div>
                     <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 150 }>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href="#home">HOME</a>
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
            <Row className = "nav-container" style={{backgroundColor: navBackground}}>
                <div className= "nav">
                    <a href="/jarsSystem">HOME</a>
                    <a href = "#about">ABOUT</a>
                    <a href = "#start">START</a>
                    <a href = "#contact">CONTACT</a>
                </div>
            </Row>
            )
        }
    }
}

export default Navigation;