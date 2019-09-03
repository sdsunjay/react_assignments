import * as actionTypes from '../actions';

const initialState = {
  counter: 0
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
    default:
      console.log(action.type);
      return state;
  }
};

export default reducer;
