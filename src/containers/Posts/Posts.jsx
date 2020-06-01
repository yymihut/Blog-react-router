import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../Components/Post/Post';
import "./Posts.css";
import FullPost from '../../../src/containers/FullPost/FullPost';




class Posts extends Component {
   constructor(props) {
      super(props)
      this.state = {
         posts: []
      }
   }

   postViewFunction = id => {
      this.props.history.push({ pathname: '/' + id })
   }

   componentDidMount() {
      axios.get('http://localhost:3000/posts').then(response => {
         this.setState({ posts: response.data })
         console.log('raspunsul', this.state);
      })
   }

   render() {
      let posts = this.state.posts.map(post => {
         return (
            <Post
               author={post.author}
               title={post.title}
               text={post.text}
               key={post.id}
               date={post.date}
               clicked={() => this.postViewFunction(post.id)}
            />
         )
      })
      console.log('ureleu -->',this.props.match.url)
      return (         
         <div>
            <div className="allPosts">
               {posts}
            </div>
            <Route path={this.props.match.url + '/:id'} exact component={} />
         </div>

      )
   }

}

export default Posts;


