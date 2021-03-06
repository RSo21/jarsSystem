import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import githubIcon from "../assets/Octicons-mark-github.svg";

class HomeFooter extends Component{
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
                <Container fluid id="contact" className="home-footer-mobile">
                    <Row>
                        <p className="home-footer-mobile-text">&copy; 2020 by <span>ROKSANA SOBCZAK</span> | All Rights Reserved | &nbsp;</p>
                        <p className="home-footer-mobile-text"><span>Find me on: </span>&nbsp;<a href = "https://github.com/RSo21"> <img className="github-icon-mobile" src={githubIcon} alt="github icon"/></a></p>
                    </Row>
                </Container>
            )

        }else{
            return(
                <Container fluid id="contact">
                    <Row>
                        <Col>&copy; 2020 by <span>ROKSANA SOBCZAK</span> | All Rights Reserved | &nbsp;
                            <span>Find me on: </span>&nbsp;<a href = "https://github.com/RSo21"> <img className="github-icon" src={githubIcon} alt="github icon"/></a>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default HomeFooter;