import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import githubIcon from "../assets/Octicons-mark-github.svg";



const HomeFooter  = () => {

    return(
        <Container fluid id="contact">
            <Row>
                <Col>&copy; 2020 by <span>ROKSANA SOBCZAK</span> | All Rights Reserved | &nbsp;
                <span>Find me on: </span>&nbsp;<a  href = "https://github.com/RSo21"> <img className="github-icon" src={githubIcon} alt="github icon"/></a>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeFooter;