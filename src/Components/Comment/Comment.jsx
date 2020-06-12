import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Comment.css";

const useStyles = () => ({
    root: {
        marginTop: "28px",
        width: "70%",
        opacity: 0.8,
        boxShadow: "-1px 6px 19px 1px rgba(0,0,0,0.75)",
        backgroundColor: "rgb(177, 177, 177)",
    }

});

class Comment extends Component {    

    render() {
        const { classes } = this.props
        return (
            <Card
                className={classes.root}            >
                <CardActionArea>
                    <CardContent>                        
                        <Typography className="commentPostText" variant="body2" color="inherit" component="p">
                            {this.props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions >                    
                    <Typography component="div" className="commentAuthorDate">
                        <Typography variant="body2" color="inherit" component="p">
                            Date: {this.props.date}
                        </Typography>
                        <Typography variant="body2" color="inherit" component="p">
                            User: {this.props.user}
                        </Typography>
                    </Typography>
                </CardActions>
            </Card>
        )
    }

}

export default withRouter(withStyles(useStyles)(Comment));