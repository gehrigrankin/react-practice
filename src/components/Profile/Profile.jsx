import React from "react";

import classes from './Profile.css';
import './Profile.css';

const Profile = props => {

    // const style = {
    //     '@media (max-width: 600px)' : {
    //         color: 'red'
    //     }
    // }

    return (
        <div className={classes.Profile}>
            <input onChange={props.change} type="text"/>
            <h1>{props.name}</h1>
            <h3>{props.occupation}</h3>
            <p>{props.aboutMe}</p>
            <button className={classes.button}>hello</button>
        </div>    
    )  
};

export default Profile;
