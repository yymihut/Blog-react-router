import React from 'react';
import Typography from "@material-ui/core/Typography";
import "./Login.css";


const Login = () => {
    console.log('const Login = () =>--->');
    return (
        <div className="cardLogin">
            <div className="titleAndInfo">
                <Typography gutterBottom variant="h5" component="h2">
                Please enter UserName and Pasword !
                </Typography>                
            </div>           
        </div>
    )
}

export default About;

