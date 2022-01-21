import React from 'react';

import './Home.css';

import Logo from '../common/Logo/Logo';
import bg_main from '../../assets/bg_main.png';

const Home = () => {
    return(
        <div class="wrapper">
            <Logo type={"white"} />
            <div class="background">
                <img src={bg_main} alt=""/>
            </div>
        </div>
    );
}

export default Home;