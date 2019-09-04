import * as actionTypes from './actionTypes';

export const increment = (value) => {
  return {
    type: actionTypes.INCREMENT,
    value: value
  }
};

export const saveResult = (results) => {
  //const updatedResult = +results * 2;
  return {
    type: actionTypes.STORE_RESULT,
    results: results
  };
}

export const storeResult = (results) => {
  return (dispatch, getState) => {
    setTimeout( () => {
      // try not to call 'getState' in actions
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(results))
    }, 2000);
  }
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId: id
  }
};
