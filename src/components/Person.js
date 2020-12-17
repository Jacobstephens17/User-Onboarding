import React from 'react'


export default function Person(props) {
  const { details } = props
  if (!details) {
    return <h3>Working fetching user details...</h3>
  } else if(details){
    return(
      <div>
          <h2>Welcome to the team {details.username}!</h2>
          <p>Is {details.email} your correct email?</p>
          <button>Yes</button><button>No</button>
      </div>
    )
  }
}
