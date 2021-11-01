import React, { useRef } from 'react';

const DeliveryMan = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddDeliveryMan = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };
        fetch('https://secret-cove-95880.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();

                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h2>Please Add Delivery Man</h2>
            <form onSubmit={handleAddDeliveryMan} >
                <input type="text" ref={nameRef} name="" id="" placeholder="Enter Your Name" />
                <input type="email" ref={emailRef} name="" id="" placeholder="Enter Your Email" />
                <input type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default DeliveryMan;