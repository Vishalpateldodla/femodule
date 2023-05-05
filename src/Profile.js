import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [user, setUser] = useState(null);
  const id = useSelector(state => state.user.id);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      setUser(data);
    })
    .catch(err => console.log(err));
  }, [id, token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <h3>Phone: {user.phone}</h3>
      <h4>Address: {user.address}</h4>
    </div>
  );
}

export default Profile;
