import React from "react";
import Navigation from "./Navigation"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const HomeHeader  = () => {

    return(
        <Row className = "home-header-container">
            <Col className = "home-header-nav"><Navigation /></Col>
        </Row>

     
    )


}

export default HomeHeader;