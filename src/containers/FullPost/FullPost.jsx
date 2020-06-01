import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import "./FullPost.css";

const useStyles = () => ({
   root: {
      marginTop: "15px",
      width: 800,
      opacity: 0.8
   },
   media: {
      height: 30,
      marginBottom: "10px",
   },

});

class Media extends Component {
   constructor(props) {
      super(props)
      this.sate = {
         loadedPost: '',
      }
   }



   componentDidMount() {
      console.log(this.props);
      /* this.loadPost(); */
   }

   componentDidUpdate() {
      console.log(this.props.match.params.id)

   }



   render() {
      console.log(this.props.match.params.id)
      console.log(this.props)
      const { classes } = this.props
      return (
         <Card className={classes.root}>
            <CardActionArea>
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {this.props.title}
                  </Typography>
                  <Typography className="postText" variant="body2" color="inherit" component="p">
                     {this.props.text}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions >
               <div className="editViewButtons">
                  <Button
                     variant="contained"
                     size="small"
                     className={classes.margin}

                  >
                     View
                    </Button>
                  <Button
                     variant="contained"
                     size="small"
                     className={classes.margin}

                  >
                     Edit
                     </Button>
               </div>

               <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
               >
                  Delete
                </Button>
               <Typography component="div" className="authorDate">
                  <Typography variant="body2" color="inherit" component="p">
                     Date: {this.props.date}
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                     Author: {this.props.author}
                  </Typography>
               </Typography>
            </CardActions>
         </Card>
      )
   }

}

export default withStyles(useStyles)(Media);