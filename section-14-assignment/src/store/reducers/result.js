import * as actionTypes from '../actions/actionTypes';
import {updateObject } from '../utility.js';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter( (result) => result.id !== action.resultId);
  return updateObject(state, {results: updatedArray});
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Put pure data transforming logic here
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.results})});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
