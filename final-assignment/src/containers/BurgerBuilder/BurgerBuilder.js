import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1.5,
  bacon: 0.7,
}

class BurgerBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
      loading: false,
      error: false
    }
  }

  componentWillMount() {
    axios.get('/ingredients.json')
    .then(response => { this.setState({ingredients: response.data})})
    .catch(error => {
        this.setState({error: true, loading: false, purchasing: false});
      });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    }).reduce((sum, el) => {
        return sum + el;
    },0);
    this.setState({purchaseable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtractions = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtractions;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }
  purchaseContinueHandler = () => {
/**
    this.setState({loading: true});
    //alert('you continue!');
    const order = {
      ingredients: this.state.ingredients,
      // we should check this price on the server, dont want it manipulated
      price: this.state.totalPrice,
      customer: {
        name: 'Sunjay Dhama',
        address: {
          line1: '34 Elm St.',
          line2: 'Apt 1',
          zip: '00000',
          state: 'CA'
        },
        email: 'sunjay@example.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => {
        this.setState({loading: false, purchasing: false});
      })
    .catch(error => {
        this.setState({loading: false, purchasing: false});
      });
      */
      this.props.history.push('/checkout');
    }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for ( let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    let orderSummary = <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler} />
        </Aux>
      );
      orderSummary =   <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinueHandler={this.purchaseContinueHandler} />;
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    // {salad: true, meat: false, ...}
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
          {burger}
      </Aux>

    );
  }

}

export default withErrorHandler(BurgerBuilder, axios);
