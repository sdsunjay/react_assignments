import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        meat: 2,
        cheese: 2,
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
