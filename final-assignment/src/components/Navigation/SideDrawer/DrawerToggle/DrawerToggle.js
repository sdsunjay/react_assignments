import React from 'react';

import classes from './drawerToggle.module.css';


const drawerToggle = (props) => {

  return (
    <div onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
