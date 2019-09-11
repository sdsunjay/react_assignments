import React from 'react';

const user = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <style jsx>{`
        a {
          text-decoration: none;
        }
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
        @media (max-width: 600px) {
          div {
            background: white;
          }
        }
      `}</style>
  </div>

);

export default user;
