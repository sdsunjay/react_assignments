import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1
      }
    }

  }

  componentWillMount() {
  }

  render () {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}/>
      </div>
    );
  }
}

export default Checkout;
