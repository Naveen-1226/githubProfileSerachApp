import React from  "react";
import image from "../../image.png";
import {Link} from "react-router-dom";

const User =(props)=>{
    const {avatar_url,login,id}=props.user;
    return(
        <React.Fragment>
            <div className="user ">
                <div className="image">
                    <img src={avatar_url} alt={login} />
                </div>
                <div className="user-info">
                    <h3>{login}</h3>
                    <small>{id}</small>
                    <Link to={`/user/${login}`}>View Profile</Link>
                </div>
            </div>


        </React.Fragment>

    );

};


export default User;