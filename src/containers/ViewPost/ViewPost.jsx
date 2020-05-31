import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import "./ViewPost.css";

const useStyles = makeStyles({
   root: {
      marginTop: "15px",
      maxWidth: 645,
      opacity: 0.8
   },
   media: {
      height: 100,
      marginBottom: "10px",
   },

});

export default function MediaCard() {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia
               className={classes.media}
               image="/static/images/cards/contemplative-reptile.jpg"
               title="Contemplative Reptile"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  Titlu Post
               </Typography>
               <Typography className="postText" variant="body2" color="black" component="p">
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penat
                  ibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla c
                  onsequat massa quis enim."
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
               <Typography variant="body2" color="black" component="p">
                  Date: 31.05.2020
               </Typography>
               <Typography variant="body2" color="black" component="p">
                  Author: Mihut Marius Ciprian
                </Typography>
            </Typography>
         </CardActions>
      </Card>
   );
}
