import * as actionTypes from './actionTypes';

export const increment = (value) => {
  return {
    type: actionTypes.INCREMENT,
    value: value
  }
};

export const saveResult = (results) => {
  return {
    type: actionTypes.STORE_RESULT,
    results: results
  };
}

export const storeResult = (results) => {
  return dispatch => {
    setTimeout( () => {
      dispatch(saveResult(results));
    }, 2000);
  }
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId: id
  }
};
