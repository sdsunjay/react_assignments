import React from 'react';

const style = {

  border:'2px solid red'

};
const userInput = (props) => {
  return <input
          type="text"
          style={style}
          onChange={props.changed}
          value={props.currentName}/>;
};

export default userInput;
