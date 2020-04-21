import React, { Component } from 'react';

import HomeMain from '../components/HomeMain';
import HomeAbout from '../components/HomeAbout';
import HomeFooter from '../components/HomeFooter';



class Home extends Component{
    render(){
        return(
            <>
                <HomeMain />
                <HomeAbout />
                <HomeFooter />
            </>
        );
    }
}
export default Home;