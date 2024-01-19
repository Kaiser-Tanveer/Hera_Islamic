import React from 'react';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';
import Offers from './Offers/Offers';
import Classes from './Classes/Classes';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Welcome />
            <Offers />
            <Classes />
            <Services />
        </div>
    );
};

export default Home;