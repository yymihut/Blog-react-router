import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import "./AddPost.css";
import axios from 'axios';

class CreatePost extends Component {
    state = {
        newTitleValue: '',
        newTextValue: '',
        newAuthorValue: '',
    }

    componentDidMount = () => {      
        console.log('props la Edit-Post componentDidMount()', this.props);
        this.createNewData = () => {
            axios.post('http://localhost:3000/posts', {
                author: this.state.newAuthorValue,
                title: this.state.newTitleValue,
                text: this.state.newTextValue,
                date: this.currentDay('/'),
            }).then(response => {
                console.log('this.createNewData ***** ', response)
                /* this.setState({ loadedPost: response.data }); */
            }).catch((err) => {
                // daca sa stricat ceva
                alert(err)
            });
        }
    }

    submitFunction = () => {
        console.log(this.state);        
        this.createNewData();
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

    render() {
        console.log('render() Edit-Post--->', this.props);
        return (
            <div className="cardAddPost">
                <div className="titleAndInfoAddPost">
                    <Typography gutterBottom variant="h5" component="h2">
                        Add post
                    </Typography>
                    <TextField
                        label="Post title"
                        variant="outlined"
                        multiline={true}
                        rowsMax="5"
                        fullWidth={false}
                        placeholder='Your post title'
                        /* defaultValue={this.props.history.location.state.title} */
                        onChange={this.updateStateInputs('newTitleValue')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Post text"
                        variant="outlined"
                        multiline={true}
                        rowsMax="25"
                        fullWidth={true}
                        placeholder='Your post about ...'
                        /* defaultValue={this.props.history.location.state.text} */
                        onChange={this.updateStateInputs('newTextValue')}
                    />
                </div>
                <div className="actionButonsAddPost">
                    <div className="editViewButtonsAddPost">
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => this.submitFunction()}
                        >
                            Submit
                        </Button>
                    </div>

                    <div className="authorDateAddPost">
                        <Typography variant="body2" color="inherit" component="p">
                            Date: {this.currentDay('/')}
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Author"
                            variant="outlined"
                            placeholder='Your name'
                            /* defaultValue={this.props.history.location.state.author} */
                            onChange={this.updateStateInputs('newAuthorValue')}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;

