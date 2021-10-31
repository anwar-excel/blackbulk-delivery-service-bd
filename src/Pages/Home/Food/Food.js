import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

const Food = () => {
    const [error, setError] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/food')
            .then(res => res.json())
            .then(data => setError(data));
    }, []);
    return (
        <div>
            <div>
                {error.map(foo => <Foods
                    key={foo.id}
                    food={foo}
                ></Foods>)}
            </div>
        </div>
    );
};

export default Food;