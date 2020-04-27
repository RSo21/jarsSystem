import React, { Component } from "react";
import Navigation from "./Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class HomeMain extends Component {
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
                <Container fluid className = "home-main-container" id="home">
                    <Row>
                        <Col>
                            <Navigation />
                            <div className = "home-main-text-mobile">
                                <h1>This <span>6 JARS System</span> Can Work Miracles For You</h1>
                                <button className = "main-btn-mobile"><a href = "#start">START</a></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }else{
            return(
                <Container fluid className = "home-main-container" id="home">
                    <Row>
                        <Col>
                            <Navigation />
                            <div className = "home-main-text">
                                <h1>This <span>6 JARS System</span> Can Work Miracles For You</h1>
                                <button className = "main-btn"><a href = "#start">START</a></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default HomeMain;