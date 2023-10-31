
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserForm from './components/UserForm';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });
  }, []);

    //to add user
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  return (
    <>
      <div className='container'>
        <h2 className='text-danger text-center'>ADDING USER DETAILS</h2>
        <div className="row mt-5">
          <div className="col-12 col-md-6  ">
            <UserForm addUser={addUser} />
          </div>
          <div className="col-12 col-md-6 ">
            <h2 className='text-primary'>USER LIST</h2>
            <div>
              <table className='table table-bordered shadow '>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 && users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

