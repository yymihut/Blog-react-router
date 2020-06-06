import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import "./EditPost.css";
import axios from 'axios';

class EditPost extends Component {
    state = {
        newTitleValue: '',
        newTextValue: '',
        newAuthorValue: '',
    }

    componentDidMount() {
        console.log('props la Edit-Post componentDidMount()', this.props);
        /* this.loadData(); */
    }

    /*    componentDidUpdate(prevProps) {
          if (+this.props.match.params.id !== prevProps.id) {
             this.loadData();
          }
       } */

    /* loadData() {
       axios.get('http://localhost:3000/posts/' + this.props.match.params.id)
          .then(response => {            
             this.setState({ loadedPost: response.data });
          }).catch((err) => {
             // daca sa stricat ceva
             alert('introduceti id corect', err)
          });
    } */

    submitFunction = () => {
        /* this.setState({
            newTitleValue: this.title.value,
            newTextValue: this.text.value,
            newAuthorValue: this.author.value,
        }) */
        console.log(this.state);
        this.props.history.goBack();
    }

    updateInputTitle = (event) => {
        this.setState({ newTitleValue: event.target.value })
    }
    updateInputText = (event) => {
        this.setState({ newTextValue: event.target.value })
    }
    updateInputAuthor = (event) => {
        this.setState({ newAuthorValue: event.target.value })
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

    render() {
        console.log('render() Edit-Post--->', this.props);
        return (
            <div className="cardEditPost">
                <div className="titleAndInfoEditPost">
                    <Typography gutterBottom variant="h5" component="h2">
                        Edit post {/* {title} */}
                    </Typography>
                    <TextField
                        label="Post title"
                        variant="outlined"
                        multiline={true}
                        rowsMax="5"
                        fullWidth={false}
                        defaultValue={this.props.history.location.state.title}
                        onChange={event => this.updateInputTitle(event)}
                    /* onChange={event => this.setState({newTitleValue: event.target.value})} */
                    />
                    <TextField
                        id="outlined-basic"
                        label="Post text"
                        variant="outlined"
                        multiline={true}
                        rowsMax="25"
                        fullWidth={true}
                        defaultValue={this.props.history.location.state.text}
                        onChange={event => this.updateInputText(event)}
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
                            onChange={event => this.updateInputAuthor(event)}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default EditPost;

