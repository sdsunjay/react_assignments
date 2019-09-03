import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter( (result) => result.id !== action.resultId);
      return {
        ...state,
        results: updatedArray

      }
    default:
      console.log(action.type);
      return state;
  }
};

export default reducer;
