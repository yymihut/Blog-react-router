import React, { Component } from 'react';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../containers/Myblog.css';
import Posts from '../containers/Posts/Posts';
import FullPost from '../containers/FullPost/FullPost';
import EditPost from '../containers/Edit-post/EditPost';
import AddPost from '../containers/AddPost/AddPost';
import About from '../containers/About/About';
import Login from '../containers/Login/Login';


class Myblog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: null
        }
        this.auth = null
    }

    logOut = () => {
        this.setState({auth: false})   
        sessionStorage.clear();        
    }   

    isLogged = () => {       
        this.auth = sessionStorage.getItem('auth')
        if (!this.auth) {
            return (
                <li>
                    <NavLink to="/login" exact>
                        Login
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li>
                    <NavLink to={"/posts"} exact onClick={this.confimation}> 
                        Sign out
                    </NavLink>
                </li>
            )
        }
    }

    confimation = () => {
        confirmAlert({
            title: 'Log out',
            message: 'Are you sure to do this ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: ()=> this.logOut()
                },
                {
                    label: 'No',
                    onClick: () => {return false}
                }
            ]
        });
    };

    addPost = () => {        
        if (this.auth) {
            return (
                <li>
                    <NavLink to="/add-post" exact >
                        Add Post
                    </NavLink>
                </li>
            )
        }
    }

    render() {
        let checkLogin = this.isLogged()
        let addPost = this.addPost()
        return (
            <div className="myblog">
                <nav>My blog
                    <ul>
                        {checkLogin}
                        <li>
                            <NavLink to="/posts" exact >
                                Home Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact>
                                About Page
                            </NavLink>
                        </li>
                        {addPost}
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/posts" exact render={props => <Posts {...props} auth={this.auth} />} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/add-post" exact component={AddPost} />
                    <Route path="/about" exact component={About} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/posts/editPost/:id" exact component={EditPost} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Myblog);