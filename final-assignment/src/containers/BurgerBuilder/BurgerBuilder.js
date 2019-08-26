import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0,
        price: 0.00
      }
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>

    );
  }

}

export default BurgerBuilder;
