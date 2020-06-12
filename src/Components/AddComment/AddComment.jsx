import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import "./AddComment.css";
import axios from 'axios';

class CreateComment extends Component {
    state = {
        newCommentValue: '',       
    }

    componentDidMount = () => {
        this.createNewComment = () => {
            let idx = this.props.history.location.state.idx;
            axios.post(`http://localhost:3000/posts/${idx}/comments`, {
                user: this.getUser(),                
                text: this.state.newCommentValue,
                date: this.currentDay('/'),
            }).then(response => {
                console.log('this.createNewData ***** ', response)               
            }).catch((err) => {                
                alert(err)
            });
        }
    }

    submitFunction = () => {
        console.log(this.state);        
        this.createNewComment();
        this.props.history.goBack();
    }

    currentDay = (sp) => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return (mm + sp + dd + sp + yyyy);
    };

    updateStateInputs(key) {
        return (event) => this.setState({ [key]: event.target.value })
    }

    cancel = ()=> {
        this.props.history.goBack();
    }

    getUser =()=> sessionStorage.getItem('user');

    render() {
        console.log('this.getUser()',this.getUser())        
        return (
            <div className="cardAddComment">
                <div className="titleAndInfoAddComment">
                    <Typography gutterBottom variant="h5" component="h2">
                        Your comment here
                    </Typography>                    
                    <TextField
                        id="outlined-basic"
                        label="Comment text"
                        variant="outlined"
                        multiline={true}
                        rowsMax="25"
                        fullWidth={true}
                        placeholder='Your comment about ...'                     
                        onChange={this.updateStateInputs('newCommentValue')}
                    />
                </div>
                <div className="actionButonsAddComment">
                    <div className="editViewButtonsAddComment">
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => this.submitFunction()}
                        >
                            Add
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={this.cancel}
                        >
                            Cancel
                        </Button>
                    </div>

                    <div className="authorDateAddComment">
                        <Typography variant="body2" color="inherit" component="p">
                            Date: {this.currentDay('/')}
                        </Typography>
                        <Typography variant="body2" color="inherit" component="p">
                            User: {this.getUser()}
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateComment;

