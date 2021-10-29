import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Man = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>Users Available :{users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name}::{user.email}
                        <button>Update</button>
                        <button>X</button></li>)
                }
            </ul>
        </div>
    );
};

export default Man;