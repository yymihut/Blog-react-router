import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import "./EditPost.css";
import axios from 'axios';

class EditPost extends Component {
    state = {
        newTitleValue: '',
        newTextValue: '',
        newAuthorValue: '',
    }

    componentDidMount = () => {
        this.setState({
            newTitleValue: this.props.history.location.state.title,
            newTextValue: this.props.history.location.state.text,
            newAuthorValue: this.props.history.location.state.author,
        })
        console.log('props la Edit-Post componentDidMount()', this.props);
        this.updateNewData = () => {
            axios.put('http://localhost:3000/posts/' + this.props.match.params.id, {
                author: this.state.newAuthorValue,
                title: this.state.newTitleValue,
                text: this.state.newTextValue,
                date: this.currentDay('/'),
            }).then(response => {
                console.log('sendNewData()------', response)
                /* this.setState({ loadedPost: response.data }); */
            }).catch((err) => {
                // daca sa stricat ceva
                alert(err)
            });
        }
    }

    submitFunction = () => {
        console.log(this.state);        
        this.updateNewData();
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

    cancel = ()=> {
        this.props.history.goBack();
    }

    updateStateInputs(key) {
        return (event) => this.setState({ [key]: event.target.value })
    }

    render() {       
        return (
            <div className="cardEditPost">
                <div className="titleAndInfoEditPost">
                    <Typography gutterBottom variant="h5" component="h2">
                        Edit post
                    </Typography>
                    <TextField
                        label="Post title"
                        variant="outlined"
                        multiline={true}
                        rowsMax="5"
                        fullWidth={false}
                        defaultValue={this.props.history.location.state.title}
                        onChange={this.updateStateInputs('newTitleValue')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Post text"
                        variant="outlined"
                        multiline={true}
                        rowsMax="25"
                        fullWidth={true}
                        defaultValue={this.props.history.location.state.text}
                        onChange={this.updateStateInputs('newTextValue')}
                    />
                </div>
                <div className="actionButonsEditPost">
                    <div className="editViewButtonsEditPost">
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => this.submitFunction()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={this.cancel}
                        >
                            Cancel
                        </Button>
                    </div>

                    <div className="authorDateEditPost">
                        <Typography variant="body2" color="inherit" component="p">
                            Date: {this.currentDay('/')}
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Author"
                            variant="outlined"
                            defaultValue={this.props.history.location.state.author}
                            onChange={this.updateStateInputs('newAuthorValue')}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default EditPost;

