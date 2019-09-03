import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.results})
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter( (result) => result.id !== action.resultId);
      return {
        ...state,
        results: updatedArray

      }
    default:
      return state;
  }
};

export default reducer;
