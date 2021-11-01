import React, { useEffect, useState } from 'react';

const Update = () => {
    const [update, setUpdate] = useState([]);
    useEffect(() => {
        fetch('https://secret-cove-95880.herokuapp.com/food')
            .then(res => res.json())
            .then(data => setUpdate(data));
    }, []);
    //DELETE AN Food
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            const url = `/food/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = update.filter(food => food._id !== id);
                        console.log(remainingUsers);
                        setUpdate(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            <button onClick={() => handleDeleteUser(update._id)}></button>
        </div >
    );
};

export default Update;

