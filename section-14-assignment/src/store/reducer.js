
const initialState = {
  counter: 0,
  results: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - action.value
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case 'DELETE_RESULT':
      return {
        ...state,
        results: []
      }
    default:
      console.log(action.type);
      return state;
  }
};

export default reducer;
