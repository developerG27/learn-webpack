import React from 'react';

function Teacher(props) {
  return (
    <li className="Teachers">
      <p>
        {props.name} <a href={`https://twitter/${props.twitter}`}>@{props.twitter}</a>
      </p>
    </li>
  )
}

export default Teacher;
