import React from "react";

const Profile = props => (
    <div className="Profile">
        <input onChange={props.change} type="text"/>
        <h1>{props.name}</h1>
        <h3>{props.occupation}</h3>
        <p>{props.aboutMe}</p>
    </div>
);

export default Profile;
