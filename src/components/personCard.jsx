import React from 'react'

const personCard = (props) => {
  return (
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <h4>Age: {props.age}</h4>
        <h4>Hair color: {props.haircolor}</h4>
    </div>
  )
}

export default personCard
