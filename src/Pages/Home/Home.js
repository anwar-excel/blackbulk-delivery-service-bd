import React from 'react';
import Banner from './Banner/Banner';
import Food from './Food/Food';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>the home</h2>
            <Food></Food>
        </div>
    );
};

export default Home;