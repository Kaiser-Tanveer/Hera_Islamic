import React from 'react';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';
import Offers from './Offers/Offers';
import Classes from './Classes/Classes';
import Services from './Services/Services';
import PriceCard from './PriceCard/PriceCard';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Welcome />
            <Offers />
            <Classes />
            <Services />
            <Reviews />
            <PriceCard />
        </div>
    );
};

export default Home;