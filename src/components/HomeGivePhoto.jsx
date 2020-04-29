import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import givePhoto from "../assets/kat-yukawa-K0E6E0a0R3A-unsplash.jpg";

class HomeGivePhoto extends Component{
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
                <Container fluid className="home-give-photo-mobile">
                    <Row>
                        <Col>
                            <img className="home-about-jar-photo-mobile" src={givePhoto} alt="givePhoto"/>
                        </Col> 
                    </Row>
                </Container>
            )
        }
    }
}

export default HomeGivePhoto;