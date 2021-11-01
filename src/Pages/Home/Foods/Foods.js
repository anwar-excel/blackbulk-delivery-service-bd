import React from 'react';
import { Link } from 'react-router-dom';
import './Foods.css';
const Foods = (props) => {
    // console.log(foo);
    const { _id, name, price, description, img } = props.code;
    return (
        <div className="service pb-3 foods-align">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/update/${_id}`}>
                <button>Details</button>
            </Link>

        </div>
    );
};

export default Foods;
