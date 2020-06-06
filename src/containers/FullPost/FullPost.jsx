import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import "./FullPost.css";
import axios from 'axios';

class FullPost extends Component {
   state = {
      loadedPost: null
   }

   componentDidMount() {
      console.log('props la FullPost componentDidMount()', this.props);
      this.loadData();
   }

   /*    componentDidUpdate(prevProps) {
         if (+this.props.match.params.id !== prevProps.id) {
            this.loadData();
         }
      } */

   loadData() {
      axios.get('http://localhost:3000/posts/' + this.props.match.params.id)
         .then(response => {            
            this.setState({ loadedPost: response.data });
         }).catch((err) => {
            // daca sa stricat ceva
            alert('introduceti id corect', err)
         });
   }

   render() {
      let post = <p>Please select a Post!</p>;
      if (this.state.loadedPost) {
         const { title, text, date, author } = this.state.loadedPost;
         console.log('render() datele de la if--->', title, text, date, author);
         post = (
            <div className="card">
               <div className="titleAndInfo">
                  <Typography gutterBottom variant="h5" component="h2">
                     {title}
                  </Typography>
                  <Typography className="postText" variant="body2" color="inherit" component="p">
                     {text}
                  </Typography>
               </div>
               <div className="actionButons">
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
         )
      }
      return post
   }
}

export default FullPost;

