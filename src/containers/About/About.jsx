import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import "./About.css";


const About = () => {
    console.log('const About = () =>--->');
    return (
        <div className="cardAbout">
            <div className="titleAndInfo">
                <Typography gutterBottom variant="h5" component="h2">
                Lorem Ipsum is simply dummy text
                </Typography>
                <Typography className="postText" variant="body2" color="inherit" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </Typography>
                <Typography className="postText" variant="body2" color="inherit" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </Typography>
                <Typography className="postText" variant="body2" color="inherit" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </Typography>
                <Typography className="postText" variant="body2" color="inherit" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </Typography>
                <Typography className="postText" variant="body2" color="inherit" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </Typography>
            </div>           
        </div>
    )
}

export default About;

