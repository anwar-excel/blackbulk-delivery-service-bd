import React from 'react';
import useAuth from '../../hooks/useAuth';
import AddFood from './AddFood/AddFood';
import Banner from './Banner/Banner';
import Food from './Food/Food';

const Home = () => {
    const { user } = useAuth
    return (
        <div>

            <Banner></Banner>
            <h5>User: {user?.displayName}</h5>

            <h2>Our Food service</h2>
            <Food></Food>
            <AddFood></AddFood>

        </div>
    );
};

export default Home;