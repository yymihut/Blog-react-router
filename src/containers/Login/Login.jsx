import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import "./Login.css";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            passInput: ''
        }
        this.fetchedUsers = [
            {
                userName: 'marius',
                password: '123'
            },
            {
                userName: 'mihut',
                password: '123'
            },
            {
                userName: 'ioana',
                password: '123'
            },
        ]
        this.auth = null;
    }

    info = () => {        
        confirmAlert({
            title: 'Invalid useName or password',
            message: 'try again !',
            buttons: [] 
        });
    };

    updateStateInputs(key) {
        return (event) => this.setState({ [key]: event.target.value })
    }

    loginCheck = () => {
        this.fetchedUsers.forEach(el => {
            if (el.userName === this.state.userInput &&
                el.password === this.state.passInput) {
                sessionStorage.setItem('auth', true);
                sessionStorage.setItem('user', el.userName);
                this.props.history.push('/posts');               
            }
        });
        if (!sessionStorage.getItem('auth')) {            
            this.info();
        }
    }

    cancel = () => {        
        this.props.history.goBack();        
    }

    render() {
        return (
            <div className="cardLogin">
                <div className="titleAndInfo">
                    <Typography gutterBottom variant="h5" component="h2">
                        Please enter UserName and Pasword !
                </Typography>
                </div>
                <form className="loginPasswordForm" noValidate autoComplete="off">
                    <TextField
                        id="filled-basic"
                        label="User"
                        variant="filled"
                        defaultValue={this.state.userInput}
                        onChange={this.updateStateInputs('userInput')}
                        autoFocus={true}
                    />
                    <p></p>
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        defaultValue={this.state.passInput}
                        onChange={this.updateStateInputs('passInput')}
                    />
                </form>
                <div className="editViewButtonsLogin">
                    <Button
                        variant="contained"
                        size="small"
                        onClick={this.loginCheck}
                    >
                        Ok
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={this.cancel}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);

