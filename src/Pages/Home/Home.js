import React from 'react';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';
import Offers from './Offers/Offers';
import Classes from './Classes/Classes';

const Home = () => {
    return (
        <div>
            <Banner />
            <Welcome />
            <Offers />
            <Classes />
        </div>
    );
};

export default Home;