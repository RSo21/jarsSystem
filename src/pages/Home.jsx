import React, { Component } from 'react';

import HomeMain from '../components/HomeMain';
import HomeAbout from '../components/HomeAbout';
import HomeFooter from '../components/HomeFooter';
import HomeCarousel from '../components/HomeCarousel';
import ScrollBtn from '../components/ScrollBtn';



class Home extends Component{
    render(){
        return(
            <>
                <HomeMain />
                <HomeAbout />
                <HomeCarousel />
                <HomeFooter />
                <ScrollBtn />
            </>
        );
    }
}
export default Home;