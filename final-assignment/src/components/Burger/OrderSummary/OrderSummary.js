import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  // this could be a functional component, doesn't need to be a class
  componentDidUpdate() {
    console.log('[OrderSummary] componentDidUpdate');
  }

  render() {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map( igKey => {
        return (
        <li key={igKey}>
          <span style={ {textTransform: 'capitalize'} }>{igKey}</span> : {this.props.ingredients[igKey]}
        </li> );
      });

    return (
      <Aux>
      <h3>Your Order</h3>
      <p>A burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinueHandler}>Continue</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
