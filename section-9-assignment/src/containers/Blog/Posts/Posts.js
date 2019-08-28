import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';

import './Posts.module.css';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


  componentDidMount() {
    console.log(this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        })
        this.setState({posts: updatedPosts});
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  postSelectedHandler = (id) => {
      this.setState({selectedPostId: id});
  }

  render () {

    //let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    //if(!this.state.error){
      let posts = this.state.posts.map(post => {
        return (
          <Link key={post.id} to={'/' + post.id}>
            <Post
            id={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
          </Link>
        );
      });
    //}

    return (<section className="Blog">
      {posts}
    </section>
    )
  }
}

export default Posts;
