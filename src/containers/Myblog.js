import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../containers/Myblog.css';
import Posts from '../containers/Posts/Posts';
import FullPost from '../containers/FullPost/FullPost';
import EditPost from '../containers/Edit-post/EditPost';
import AddPost from '../containers/AddPost/AddPost';
import About from '../containers/About/About';

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
                            <NavLink to="/login" exact>                                
                                    Login                                 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/posts" exact>                                
                                    Home Page                                
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact>                               
                                    About Page                                
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-post" exact>                                
                                    Add Post                                
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path ="/" exact component={Posts} />
                    <Route path ="/posts" exact component={Posts} />
                    <Route path ="/add-post" exact component={AddPost} />
                    <Route path ="/about" exact component={About} />
                    <Route path ="/posts/:id" exact component={FullPost} />
                    <Route path ="/posts/editPost/:id" exact component={EditPost}/>                  
                </Switch>
            </div>
        )
    }

    /* render={props => <EditPost {...props} isAuthed={true}/> */
}

export default Myblog;