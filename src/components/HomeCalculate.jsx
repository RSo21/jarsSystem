import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


class HomeCalculate  extends Component{
    state = {
        width: window.innerWidth,
        sum: "",
        calculateError: "",
        showCalculate: false,
        jar1Necessities: "",
        jar2LongTerm: "",
        jar3Play: "",
        jar4Education: "",
        jar5Financial: "",
        jar6Give: "",

    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    handleCalculate = () => {
        const {sum} = this.state;

        const jar1 = sum * 0.55;
        const jar2 = sum * 0.1;
        const jar3 = sum * 0.1;
        const jar4 = sum * 0.1;
        const jar5 = sum * 0.1;
        const jar6 = sum * 0.05;

        if(sum <= 0 || isNaN(sum)){
            this.setState({
                calculateError: "The amount must be greater than zero", 
            })
        }else{
            this.setState({
                showCalculate: true,
                jar1Necessities: jar1.toFixed(2),
                jar2LongTerm: jar2.toFixed(2),
                jar3Play: jar3.toFixed(2),
                jar4Education: jar4.toFixed(2),
                jar5Financial: jar5.toFixed(2),
                jar6Give: jar6.toFixed(2),
            })
        } 
    }

    handleChange = (e) => {
        this.setState({
            sum: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const {sum, calculateError, showCalculate, jar1Necessities, jar2LongTerm, jar3Play, jar4Education, jar5Financial, jar6Give} = this.state;
        const { width } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <Container fluid id="start">
                <Row>
                    <Col>
                    <form className = "home-calculate-form-mobile" onSubmit={this.handleSubmit} >
                        <label className = "home-calculate-label-mobile">    
                            ENTER THE AMOUNT: 
                            <br/>
                            {calculateError ? <p className = "calculate-error-mobile">{calculateError} </p> : ""}
                            <input type="number" value = {sum} name = "number"
                            onChange={this.handleChange} />
                        </label>
                    </form>
                <Row className="btn-row">
                    <button className = "main-btn-mobile main-btn-calculate" onClick = {this.handleCalculate}><a href="#calculate">CALC</a></button> 
                </Row>
                    {showCalculate ?
                    <Table striped bordered hover variant="dark" id="calculate calculate-mobile">
                        <thead>
                            <tr>
                                <th>JAR</th>
                                <th>AMOUNT</th>
                                <th>PERCENT</th>
                                {/* <th>GOAL</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>NECESSITIES</td>
                                <td>{jar1Necessities}</td>
                                <td>55%</td>
                            </tr>
                            <tr>
                                <td>LONG-TERM</td>
                                <td>{jar2LongTerm}</td>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <td>PLAY</td>
                                <td>{jar3Play}</td>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <td>EDUCATION</td>
                                <td>{jar4Education}</td>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <td>FINANCIAL</td>
                                <td>{jar5Financial}</td>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <td>GIVE</td>
                                <td>{jar6Give}</td>
                                <td>5%</td>
                            </tr>
                        </tbody>
                    </Table> : ""}
                    </Col>
                </Row>
            </Container>
            )
        }else{
            return(
                <Container fluid id="start">
                    <Row>
                        <Col>
                        <form className = "home-calculate-form" onSubmit={this.handleSubmit} >
                            <label className = "home-calculate-label">    
                                ENTER THE AMOUNT: 
                                <br/>
                                {calculateError ? <p className = "calculate-error">{calculateError} </p> : ""}
                                <input type="number" value = {sum} name = "number"
                                onChange={this.handleChange} />
                            </label>
                        </form>
                    <Row className="btn-row">
                        <button className = "main-btn main-btn-calculate" onClick = {this.handleCalculate}><a href="#calculate">CALCULATE</a></button> 
                    </Row>
                        {showCalculate ?
                        <Table striped bordered hover variant="dark" id="calculate">
                            <thead>
                                <tr>
                                    <th>JAR</th>
                                    <th>AMOUNT</th>
                                    <th>PERCENT</th>
                                    <th>GOAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NECESSITIES</td>
                                    <td>{jar1Necessities}</td>
                                    <td>55%</td>
                                    <td>RENT, FOOD, ELECTRICITY, BILL</td>
                                </tr>
                                <tr>
                                    <td>LONG-TERM</td>
                                    <td>{jar2LongTerm}</td>
                                    <td>10%</td>
                                    <td>VACATION, UNEXPECTED MEDICAL EXPENSES, BIG PURCHASES</td>
                                </tr>
                                <tr>
                                    <td>PLAY</td>
                                    <td>{jar3Play}</td>
                                    <td>10%</td>
                                    <td>SPOILING YOURSELF AND YOUR FAMILY, LEISURE EXPENSES</td>
                                </tr>
                                <tr>
                                    <td>EDUCATION</td>
                                    <td>{jar4Education}</td>
                                    <td>10%</td>
                                    <td>COUCHING, MENTORING, BOOKS, COURSES</td>
                                </tr>
                                <tr>
                                    <td>FINANCIAL</td>
                                    <td>{jar5Financial}</td>
                                    <td>10%</td>
                                    <td>STOCKS AND SHARES, MUTUAL FUNDS, ANY OTHER INVESTMENTS</td>
                                </tr>
                                <tr>
                                    <td>GIVE</td>
                                    <td>{jar6Give}</td>
                                    <td>5%</td>
                                    <td>CHARITABLE DONATIONS</td>
                                </tr>
                            </tbody>
                        </Table> : ""}
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default HomeCalculate;