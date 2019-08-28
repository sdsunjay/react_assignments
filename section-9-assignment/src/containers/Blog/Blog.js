import React, { Component } from 'react';
import axios from '../../axios';
import './Blog.module.css';
import Posts from './Posts/Posts';

class Blog extends Component {

    constructor(props) {
      super(props);
    }

    render () {
      return (
        <div className="Blog">
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/new-post">New Post</a></li>
              </ul>
            </nav>
          </header>
            <Posts />
        </div>
      );
    }
}

export default Blog;
