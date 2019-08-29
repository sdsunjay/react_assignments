import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.module.css';

class FullPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null
    }
  }

  loadData() {
    if(this.props.match.params.id){
      // this.props.match.params.id is a string, which is why we do NOT check for type equality
      // we must convert the string to a number in order to include type equality
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
        axios.get('/posts/' + this.props.match.params.id)
          .then(response => {
            this.setState({loadedPost: response.data});
        });
      }
    }
  }

  componentDidMount() {
      this.loadData();

  }
  componentDidUpdate () {
    this.loadData();
  }

  removeSelectedPostHandler = (id) => {
      axios.delete('/posts/' + this.props.match.params.id)
      .then(response => {
        console.log(response);
      });
  }

  render () {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if ( this.props.match.params.id ) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if(this.state.loadedPost){
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={this.removeSelectedPostHandler}>Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
