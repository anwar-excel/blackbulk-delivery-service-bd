import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Single.css';

const Single = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:7000/food')
            .then(res => res.json())
            .then(data => setDetails(data));

    }, []);
    // console.log(details);
    const items = details?.find(detail => detail?._id === id)
    console.log(items);
    return (
        <div className="single-details">
            <h1>Name:{items?.name}</h1>
            <h3>Price:{items?.price}</h3>
            <p>{items?.description}</p>
            <img src={items?.img} alt="" />
        </div>
    );
};

export default Single;