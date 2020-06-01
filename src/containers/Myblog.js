import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../containers/Myblog.css';
import Posts from '../containers/Posts/Posts'

class Myblog extends Component {
    render() {
        return (
            <div className="myblog">
                <nav>My blog
                    <ul>
                        <form className="loginPasswordForm" noValidate autoComplete="off">
                            <TextField
                                id="filled-basic"
                                label="User"
                                variant="filled"
                            />
                            <p></p>
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                            />
                        </form>
                        <li>
                            <NavLink to="/Login" exact>                                
                                    Login                                 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/Posts" exact>                                
                                    Home Page                                
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" exact>                               
                                    About Page                                
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AddPost" exact>                                
                                    Add Post                                
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path ="/Posts" exact component={Posts} />
                    <Route path ="/" exact component={Posts} />
                </Switch>
            </div>
        )
    }
}

export default Myblog;