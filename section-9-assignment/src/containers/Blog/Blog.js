import React, { Component } from 'react';
//import axios from '../../axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.module.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncComponent = asyncComponent(() => {
  return import('./NewPost/NewPost');
});


class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: true
    }
  }
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/posts/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/>*/}
          <Switch>
            {this.state.auth ? < Route path="/new-post" exact component={AsyncComponent}/> : null}
            <Route path="/posts" component={Posts}/>
            <Route render={() => <h1>Not Found</h1>} />
            {/*<Redirect from="/" to="/posts" />*/}
          </Switch>
      </div>
    );
  }
}

export default Blog;
