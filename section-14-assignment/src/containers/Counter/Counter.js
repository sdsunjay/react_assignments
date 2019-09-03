import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}
// state we want to get;
const mapStateToProps = state => {
  return {
    // name: slice
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT, value: 1 }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT, value: 1 }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 10 }),
    onStoreResult: (results) => dispatch({type: actionTypes.STORE_RESULT, results: results}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
