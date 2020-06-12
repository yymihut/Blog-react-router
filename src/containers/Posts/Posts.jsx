import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
import Post from '../../../src/Components/Post/Post';
import "./Posts.css";

class Posts extends Component {
   constructor(props) {
      super(props)
      this.state = {
         posts: []
      }
   }

   postViewFunction = (id, idx) => {
      this.props.history.push({
        pathname:  '/posts/' + id,
        state: {
           idx: idx,
        }
      });
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
      this.getPosts();
   }

   deletePost = (id) => {
      axios.delete('http://localhost:3000/posts/' + id)
         .then(response => {
            const newPosts = this.state.posts.filter(deleted => deleted.id !== response.data.id)
            this.setState({ posts: newPosts })
         })
   }

   getPosts = () => {
      axios.get('http://localhost:3000/posts').then(response => {
         this.setState({ posts: response.data })
      })
   }

   
   render() {    
      let posts = this.state.posts.map((post, idx) => {
         return (
            <Post
               author={post.author}
               title={post.title}
               text={post.text}
               key={post.id}
               date={post.date}
               clickedView={() => this.postViewFunction(post.id, idx)}
               clickedEdit={() => this.postEditFunction(
                  post.id,
                  post.text,
                  post.title,
                  post.author,
                  post.date)}
               clickedDelete={() => confirmAlert({
                  title: 'Deleting...',
                  message: 'Are you sure to do this ?',
                  buttons: [
                     {
                        label: 'Yes',
                        onClick: () => this.deletePost(post.id)
                     },
                     {
                        label: 'No',
                        onClick: () => { return false }
                     }
                  ]
               })}
               auth={sessionStorage.getItem('auth')}
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

export default withRouter(Posts);


