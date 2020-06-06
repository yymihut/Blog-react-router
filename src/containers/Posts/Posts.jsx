import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Post from '../../../src/Components/Post/Post';
import "./Posts.css";
import EditPost from '../Edit-post/EditPost';



class Posts extends Component {
   constructor(props) {
      super(props)
      this.state = {
         posts: []
      }
   }

   postViewFunction = (id) => {
      /* console.log("props postViewFunction ---- ",this.props.history ) */
      this.props.history.push('/posts/' + id);
   }

   postEditFunction = (id, text, title, author, date) => {
      this.props.history.push({
         pathname: '/posts/editPost/' + id,
         state: {
            author: author,
            title: title,
            text: text,
            key: id,
            date: date,
         }
      });
      console.log('this.props.history - la - postEditFunction', this.props)
   }

   componentDidMount() {
      axios.get('http://localhost:3000/posts').then(response => {
         this.setState({ posts: response.data })
      })
   }

   render() {
      console.log('this.props.history - la - render()', this.props.match.url)
      let posts = this.state.posts.map(post => {
         return (
            <Post
               author={post.author}
               title={post.title}
               text={post.text}
               key={post.id}
               date={post.date}
               clickedView={() => this.postViewFunction(post.id)}
               clickedEdit={() => this.postEditFunction(
                  post.id, 
                  post.text, 
                  post.title, 
                  post.author, 
                  post.date)}
            />
         )
      })

      return (
         <div>
            <div className="allPosts">
               {posts}
            </div>
         </div>
      )
   }
}

export default Posts;


