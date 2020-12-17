import React from 'react'

function Person({ details }) {
  if (!details) {
    return <h3>Working fetching user details...</h3>
  }

  return (
    <div>
      <h2>Name: {details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Terms Of Service: {details.tos}</p>
    </div>
  )
}

export default Person
