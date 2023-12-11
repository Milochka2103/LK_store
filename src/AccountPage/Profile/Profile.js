import React, { useContext } from 'react'


export const Profile = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or redirect if needed
  }


  const firstname = userData.firstname;
  console.log(firstname);
  return <div>{`Hello, dear ${firstname}`}</div>;
}
