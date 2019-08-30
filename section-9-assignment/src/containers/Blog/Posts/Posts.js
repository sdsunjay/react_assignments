import React, { Component } from 'react';
import axios from '../../../axios';

import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import Post from '../../../components/Post/Post';

import './Posts.module.css';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: false
    }
  }

  componentDidMount() {
    console.log(this.props);
      axios.get( '/posts' )
      .then( response => {
        const postsTemp = response.data.slice( 0, 4 );
        const updatedPosts = postsTemp.map( post => {
          return {
            ...post,
            author: 'Max'
          }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );

    }

  postSelectedHandler = (id) => {
      //this.setState({selectedPostId: id});
      // this.props.history.push({pathname: '/' + id});
      this.props.history.push( '/posts/' + id );
  }

  render () {

    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if(!this.state.error){
      posts = this.state.posts.map(post => {
        return (
          //<Link key={post.id} to={'/posts/' + post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />
          //</Link>
        );
      });
    }

    return (
      <div>
          <section className="Posts">
              {posts}
          </section>
          <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
