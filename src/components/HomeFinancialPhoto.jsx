import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import financialPhoto from "../assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";

class HomeFinancialPhoto extends Component{
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
                <Container fluid className="home-photo-mobile">
                    <Row>
                        <Col>
                            <img className="home-about-jar-photo-mobile" src={financialPhoto} alt="financialPhoto"/>
                        </Col> 
                    </Row>
                </Container>
            )
        }else{
            return(
                <>
                </>
            )
        }
    }
}

export default HomeFinancialPhoto;