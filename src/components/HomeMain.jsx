import React from "react";
import HomeHeader from "./HomeHeader";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const HomeMain  = () => {

    return(
        <Container fluid className = "home-main-container">
        <Row>
            <Col>
                <HomeHeader />
                <div className = "home-main-text">
                    <h1>This <span>6 JARS System</span> Can Work Miracles For You</h1>
                    <button className = "main-btn">START</button>
                </div>
            </Col>
        </Row>
    </Container>
    )


}

export default HomeMain;