import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Max" age={28} />
  </div>
);

authIndexPage.getInitialProps = async function(context) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( { appName: "Super App (Auth)"});
    }, 100);
  });
  console.log(promise);
  return promise;
};

export default authIndexPage;
