import * as actionTypes from '../actions/actionTypes';
import {updateObject } from '../utility.js';

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, {counter: state.counter + action.value});
    case actionTypes.DECREMENT:
        return updateObject(state, {counter: state.counter - action.value});
    case actionTypes.ADD:
  return updateObject(state, {counter: state.counter + action.value});
    case actionTypes.SUBTRACT:
      return updateObject(state, {counter: state.counter - action.value});
    default:
      console.log('UKNOWN action type' + action.type);
      return state;
  }
};

export default reducer;
