import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Users from './containers/Users'

import asyncComponent from './hoc/asyncComponent';

const asyncPizza = asyncComponent(() => {
  return import('./containers/Pizza');
});

class App extends Component {

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
          <div>
            <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link> |
          </div>
          <div>
            <Route path="/" exact component={Users} />
            <Route path="/pizza" exact component={asyncPizza} />
          </div>
      </div>
    );
  }
}

export default App;
