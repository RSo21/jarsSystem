import React, { Component } from 'react';

import HomeMain from '../components/HomeMain';
import HomeAbout from '../components/HomeAbout';
import HomeGivePhoto   from '../components/HomeGivePhoto';
import HomeCarousel from '../components/HomeCarousel';
import HomeFinancialPhoto from '../components/HomeFinancialPhoto';
import HomeCalculate from '../components/HomeCalculate';
import ScrollBtn from '../components/ScrollBtn';
import HomeFooter from '../components/HomeFooter';



class Home extends Component{
    render(){
        return(
            <>
                <HomeMain />
                <HomeAbout />
                <HomeGivePhoto />
                <HomeCarousel />
                <HomeFinancialPhoto />
                <HomeCalculate />
                <HomeFooter />
                <ScrollBtn />
            </>
        );
    }
}
export default Home;