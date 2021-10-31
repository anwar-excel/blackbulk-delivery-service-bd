import React from 'react';
import { Link } from 'react-router-dom';

const Foods = (foo) => {
    console.log(foo);
    // const { _id, name, price, description, img } = foo;
    return (
        <div className="service pb-3">
            <img src={foo.img} alt="" />
            <h3>{foo.name}</h3>
            <h5>Price: {foo.price}</h5>
            <p className="px-3">{foo.description}</p>
            <Link to={`/booking/${foo._id}`}>
                {/* <button className="btn btn-warning">Book {name.toLowerCase()}</button> */}
            </Link>
        </div>
    );
};

export default Foods;
