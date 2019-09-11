import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';


const timeout={
 appear: 500,
 enter: 400,
 exit: 1000
};

const modal = props => {

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={timeout}
      classNames="fade-slide">
      <div className="Modal">
        <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
