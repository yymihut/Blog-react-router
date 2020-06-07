import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Post.css";
import { withRouter } from 'react-router-dom';

const useStyles = () => ({
    root: {
        marginTop: "28px",
        width: 800,
        opacity: 0.8,
        boxShadow: "-1px 6px 19px 1px rgba(0,0,0,0.75)",
        backgroundColor: "rgb(177, 177, 177)",        
    }

});

class Post extends Component {  

    render() {
        const { classes } = this.props
        /* console.log('Props la Post --- >', this.props) */
        return (
            <Card 
            className={classes.root}            >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography className="postText" variant="body2" color="inherit" component="p">
                            {this.props.text.substring(0, 150) + ' .......'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions >
                    <div className="editViewButtons">
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.margin}
                            onClick={this.props.clickedView}
                        >
                            View
                    </Button>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.margin}
                            onClick={this.props.clickedEdit}
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
                        onClick={this.props.clickedDelete}                      
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

export default withRouter(withStyles(useStyles)(Post));