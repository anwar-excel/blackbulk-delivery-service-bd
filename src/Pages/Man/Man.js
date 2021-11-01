import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const Man = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://secret-cove-95880.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    //DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            const url = `/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        console.log(remainingUsers);
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Users Available :{users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name}::{user.email}
                        <Link to={`/users/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

export default Man;