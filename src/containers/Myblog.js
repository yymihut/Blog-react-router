import React, { Component, Fragment } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../containers/Myblog.css';
import Button from '@material-ui/core/Button';
import ViewPost from './ViewPost/ViewPost';


class Myblog extends Component {

    componentDidMount() {
        axios.get('http://localhost:3000/posts').then(response => {
            return console.log('raspunsul', response);
        })
    }

    render() {
        return (
            <div className="myblog">
                <nav>My blog
                    <ul>
                        <li>
                            <NavLink to="/Home">
                                <Button  variant="contained" >
                                    Home Page
                                 </Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Home">
                                <Button  variant="contained" /* color="primary" */>
                                    About Page
                                 </Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Home">
                                <Button  variant="contained" /* color="primary" */>
                                    Login
                                 </Button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="allPosts">
                    <ViewPost />
                    <ViewPost />
                    <ViewPost />
                    <ViewPost />
                    <ViewPost />
                    <ViewPost />
                    <ViewPost />
                    <ViewPost />
                </div>

            </div>

        )
    }
}

export default Myblog;