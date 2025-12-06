import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  async function fetchUser() {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  
    setUserDetails(response.data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (!userDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{userDetails.name}</h1>
      <h2>Email: {userDetails.email}</h2>
      <h2>Phone: {userDetails.phone}</h2>
      <h2>Website: {userDetails.website}</h2>
    </div>
  );
}

export default UserDetails;
