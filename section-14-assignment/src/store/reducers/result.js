import * as actionTypes from '../actions/actionTypes';
import {updateObject } from '../utility.js';

const initialState = {
  results: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    // put pure data transforming logic here
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.results})});
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter( (result) => result.id !== action.resultId);
      return updateObject(state, {results: updatedArray});
    default:
      return state;
  }
};

export default reducer;
