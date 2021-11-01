import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './Food.css';

const Food = () => {
    const [error, setError] = useState([]);
    useEffect(() => {
        fetch('https://secret-cove-95880.herokuapp.com/food')
            .then(res => res.json())
            .then(data => setError(data));
    }, []);

    return (
        <div>
            <h2>Food Service</h2>
            <div className="food-align">
                {
                    error.map(code => <Foods
                        code={code}>

                    </Foods>)
                }
                {/* {error.map(foo => <Foods
                    key={foo._id}
                    food={foo}
                ></Foods>)} */}
            </div>
        </div>
    );
};

export default Food;