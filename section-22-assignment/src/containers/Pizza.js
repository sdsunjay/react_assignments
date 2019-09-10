import React, { Component } from 'react';
import { connect } from 'react-redux';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <h1>The Pizza Image</h1>
        <PizzaImage />
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
}
export default Pizza;
//export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
