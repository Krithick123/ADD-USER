import React, { useState } from 'react';
import axios from 'axios';

const UserForm = (props) => {
    const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });
    const { addUser } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
            .then((response) => {
                if (newUser.name === '' || newUser.username === '') return; addUser(newUser);
                setNewUser({ name: '', email: '', phone: '' });
            })
            .catch((error) => {
                console.error('Error adding user: ', error);
            });
    };

    return (
        <div>
            <h2 className='text-primary'>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={newUser.name} className="form-control mb-3" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />

                <label>Email:</label>
                <input type="text" value={newUser.email} className="form-control mb-3" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />

                <label>Phone: </label>
                <input type="text" value={newUser.phone} className="form-control mb-3" onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />

                <button className='btn btn-primary mt-3' type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserForm;
