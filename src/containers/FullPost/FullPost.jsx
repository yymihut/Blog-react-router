import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Comment from '../../Components/Comment/Comment';
import "./FullPost.css";
import axios from 'axios';

class FullPost extends Component {
   state = {
      loadedPost: null,
      loadedComments: null,
   }

   componentDidMount() {
      this.loadPost();
      this.loadComments();
   }

   loadComments = () => {
      let idx = this.props.history.location.state.idx;
      axios.get(`http://localhost:3000/posts/${idx}/comments`).then(response => {
         console.log(response)
         this.setState({ loadedComments: response.data });
      })
   }

   loadPost() {
      axios.get('http://localhost:3000/posts/' + this.props.match.params.id)
         .then(response => {
            this.setState({ loadedPost: response.data });
         }).catch((err) => {
            alert('introduceti id corect', err)
         });
   }

   addCommentBtn = (idx) => {
      let auth = sessionStorage.getItem('auth');
      if (auth) {
         return (
            <Button
               variant="contained"
               size="small"
               onClick={()=> this.addCommentFunction(idx)}
            >
               Add comment
            </Button>
         )
      }
   }

   addCommentFunction = (idx) => {
      this.props.history.push({
         pathname: '/addComment',
         state: {
            idx: idx,            
         }
      });      
   }

   showComments = () => {
      let comment = this.state.loadedComments.map((comment) => {
         return (
            <Comment
               user={comment.user}
               text={comment.text}
               key={comment.id}
               date={comment.date}
            />
         )
      })
      return comment;
   }

   render() {
      console.log('this.props.history.location.state.idx---', this.props.history.location.state.idx)
      let idx = this.props.history.location.state.idx;      
      let post = <p>Please select a Post!</p>;
      if (this.state.loadedPost && this.state.loadedComments) {
         const { title, text, date, author } = this.state.loadedPost;
         console.log('render() datele de la if--->', title, text, date, author);
         post = (
            <div className="cardPostAndComents">
               <div className="cardFullPost">
                  <div className="titleAndInfo">
                     <Typography gutterBottom variant="h5" component="h2">
                        {title}
                     </Typography>
                     <Typography className="postText" variant="body2" color="inherit" component="p">
                        {text}
                     </Typography>
                  </div>
                  <div className="actionButons">
                     <div className="editViewButtons">
                        {this.addCommentBtn(idx)}
                     </div>
                     <div className="authorDate">
                        <Typography variant="body2" color="inherit" component="p">
                           Date: {date}
                        </Typography>
                        <Typography variant="body2" color="inherit" component="p">
                           Author: {author}
                        </Typography>
                     </div>
                  </div>
               </div>
               <Typography className="titleComents" gutterBottom variant="h5" component="h2">
                        Coments
               </Typography>
               {this.showComments()}
            </div>
         )
      }
      return post
   }
}

export default FullPost;

