import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import necessitiesPhoto from "../assets/artem-beliaikin-Dz-Iij3CrpM-unsplash.jpg";
import longTermPhoto from "../assets/tron-le-JsuBKjHGDMM-unsplash.jpg";
import playPhoto from "../assets/rachel-GGlz-QSvL38-unsplash.jpg";
import educationPhoto from "../assets/aleks-dorohovich-nJdwUHmaY8A-unsplash.jpg";
import financialPhoto from "../assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";
import givePhoto from "../assets/kat-yukawa-K0E6E0a0R3A-unsplash.jpg";



const HomeAbout  = () => {

    return(
        <Container fluid id="about">
            <Row>
                <Col className="home-about">
                    <p className="home-about-title" >T. HARV EKER'S JARS MONEY MANAGEMENT SYSTEM</p>
                    <hr></hr>
                    <p className="home-about-text">One of the most popular methods recently allowing you to properly control your financial resources 
                        is the 6 jars system developed by businessman, writer, motivator and speaker - T. Harv Eker.</p>

                    <p className="home-about-text">Eker believes that this is the most effective and at the same time the most effective way to manage money, 
                        no matter what monthly amount we have and how much money we have in the home budget.</p>
                    <p className="home-about-text">The Eker system is based on the monthly division of the received revenue into six parts. Of course, 
                        you can spread the funds into the title "six jars", but it may be more convenient to deposit money 
                        on six bank sub-accounts.</p>
                    <p className="home-about-text">Particular attention should be paid so that the distributed money does not mix with each other 
                        under any circumstances. So they cannot be on a shared account or in one proverbial "jar".</p>
                    <p className="home-about-text">However, the individual parts of the funds collected should not be equal. The right percentage distribution 
                        is important here. Each jar corresponds to different, everyday life needs.</p>
                    <p className="home-about-link">For more information click <a target="_blank" href ="https://www.harveker.com/blog/6-step-money-managing-system/">HERE</a></p>

                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col className="home-about-jar-title">NECESSITIES</Col>
            </Row>
            <Row className="home-about-jar">
                <Col></Col>
                <Col className="home-about-jar-container" md={10}>
                    <img className="home-about-jar-photo" src={necessitiesPhoto} alt="necessitiesPhoto"/>
                    <div className="home-about-jar-text">
                        <p>This is by far the most important element of the monthly spending of earned money. 
                            Fixed expenses finance all of our basic needs.
                        </p>
                        <p>Only by properly securing all costs necessary for daily operation can the remaining money 
                            be properly managed. 
                        </p>
                        <p>Eker included the purchase of food, rent, payment of all bills, car fuel, tickets for public transport, 
                            insurance and repayment of loans or credits as the most important expenses. 
                            However, we should spend <span>no more than 55% </span>of our income to cover all these needs.
                        </p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="home-about-jar-title">LONG TERM</Col>
            </Row>
            <Row className="home-about-jar">
                <Col></Col>
                <Col className="home-about-jar-container" md={10}>
                <div className="home-about-jar-text">
                    <p><span>Saving for spending</span></p>
                    <p>This jar should be used for total spending and gantry situations. Put aside money can be spent, 
                        for example, on a new car, television, washing machine or renovation of an apartment.</p>
                    <p>By depositing an international <span>10% </span>into this pool, we avoid taking loans if you finance larger needs. 
                        It is also worth to postpone here for a vacation or a dream trip.
                    </p>
                    <p>These funds can be used especially available for unforeseen expenses. Suddenly a broken car or 
                        a disease of a beloved pet, thanks to the assigned money management, will not drive us into debt.
                    </p>
                   
                </div>
                <img className="home-about-jar-photo" src={longTermPhoto} alt="longTermPhoto"/>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="home-about-jar-title">PLAY</Col>
            </Row>
            <Row className="home-about-jar">
                <Col></Col>
                <Col className="home-about-jar-container" md={10}>
                    <img className="home-about-jar-photo" src={playPhoto} alt="playPhoto"/>
                    <div className="home-about-jar-text">
                        <p>Allocating funds for your own pleasures, entertainment, interests or play is certainly 
                            the nicest element of using hard-earned money.
                        </p>
                        <p>The amount accumulated in this jar <span>(10%)</span>can be used for many types of games, entertainment 
                            or investments in beloved things, from buying your dream pins, going to the club with 
                            friends in the evening, a cinema, a romantic dinner with a loved one in a restaurant 
                            or a weekend trip to a spa outside the city.
                        </p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="home-about-jar-title">EDUCATION</Col>
            </Row>
            <Row className="home-about-jar">
                <Col></Col>
                <Col className="home-about-jar-container" md={10}>
                <div className="home-about-jar-text">
                    <p>Continuous personal development and raising qualifications is an important element of life. 
                        Funds collected in the fourth jar should be primarily intended for education of both yourself 
                        and your loved ones.</p>
                    <p>Of course, you can sign up for a new course, buy a conference ticket or a computer program necessary 
                        for work. However, the amount collected here can also be used for other purposes, such as going to 
                        a museum, theater or buying books or CDs.</p>
                    <p>The most important thing is to <span>constantly develop and expand new horizons</span>, but it does not necessarily 
                        have to be associated only with school or attending workshops</p>
                </div>
                <img className="home-about-jar-photo" src={educationPhoto} alt="educationPhoto"/>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="home-about-jar-title">FINANCIAL</Col>
            </Row>
            <Row className="home-about-jar">
                <Col></Col>
                <Col className="home-about-jar-container" md={10}>
                    <img className="home-about-jar-photo" src={financialPhoto} alt="financialPhoto"/>
                    <div className="home-about-jar-text">
                        <p>Funds from the fifth jar <span>(10%)</span>can be paid into a deposit, savings account, 
                            manage them on the stock exchange, buy gold and silver coins. 
                            They will also be useful for people who dream of opening their own business.
                        </p>
                        <p>Those who do not feel the need for aggressive investing and do not have capital plans, 
                            the money collected in the fifth jar can be used for faster mortgage repayment or land purchase.
                        </p>
                        <p>This jar has an additional name as a jar of <span>"freedom account"</span>.
                        </p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="home-about-jar-title">GIVE</Col>
            </Row>
            <Row className="home-about-jar">
                <Col></Col>
                <Col className="home-about-jar-container" md={10}>
                <div className="home-about-jar-text">
                    <p>Eker suggested that <span>5%</span> of the monthly funds be allocated to be dealt to others. Money from this 
                        jar can be spent on gifts for loved ones on anniversaries or on a family trip to a restaurant or cinema.</p>
                    <p>It is also worthwhile to allocate a certain amount of money from time to time to various types 
                        of charitable foundations, animal shelters or community actions. <span>Helping others</span> will not only 
                        change the world in which you live for the better, but also positively affect your well-being.</p>
                </div>
                <img className="home-about-jar-photo" src={givePhoto} alt="givePhoto"/>
                </Col>
                <Col></Col>
            </Row>
            <Row className="btn-row">
                <button className = "main-btn"><a href = "#start">START</a></button> 
            </Row>

        </Container>
    )


}

export default HomeAbout;