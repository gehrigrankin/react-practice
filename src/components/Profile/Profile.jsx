import React from "react";

import Radium from 'radium';
import './Profile.css';

const Profile = props => {

    const style = {
        '@media (max-width: 600px)' : {
            color: 'red'
        }
    }

    return (
        <div className="Profile">
            <input onChange={props.change} type="text"/>
            <h1 style={style}>{props.name}</h1>
            <h3>{props.occupation}</h3>
            <p>{props.aboutMe}</p>
        </div>    
    )  
};

export default Radium(Profile);
