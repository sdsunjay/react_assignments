import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={() => this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.onSubtractCounter}  />
            </div>
        );
    }
}
// state we want to get;
const mapStateToProps = state => {
  return {
    // name: slice
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {

  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT', value: 1 }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT', value: 1 }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
    onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 10 })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
