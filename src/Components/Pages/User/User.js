import React,{useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom";
import './User.css'
import site from "../../../assets/img.png";
import github from "../../../assets/img_1.png";
import location from "../../../assets/img_2.png";
import user from "../../../assets/img_3.png";
import user_2 from "../../../assets/img_4.png";
import axios from "../../../axios";
import Repo from "../../ui/Repo";
const  User = () => {
    const {login}=useParams();
    const [userInfo,setUserInfo]=useState({});
    const [repos,setRepos]=useState([]);

    useEffect(()=>{
        const fetchUserInformation=async ()=>{
            try{
                const response=await Promise.all([
                    axios.get(`/users/${login}`),
                    axios.get(`/users/${login}/repos`)
                ]);
                setUserInfo(response[0].data);
                setRepos(response[1].data);
                console.log(response);
                console.log(userInfo);
            }
            catch(error)
            {
                console.log(error);
            }



        };
        fetchUserInformation();
    },[]);
    return(
        <React.Fragment>
            <div className="container ">
                <Link to="/" className="back">Back</Link>
               <div className="user-information">
                   <div className="image">
                       <img src={userInfo?.avatar_url} alt=""/>

                   </div>
                   <div className="user-content">
                       <h3>{userInfo?.name}</h3>
                       <p>{userInfo?.bio}</p>
                       <div className="more-data">
                           <p><img src={user}/>{userInfo?.followers} followers. Following {userInfo?.following}</p>
                           {userInfo.location && <p><img src={location}/>{userInfo?.location}</p>}
                           {userInfo?.blog && <p><img src={site}/>{userInfo?.blog}</p>}
                           <p><img src={github}/><a href={userInfo?.html_url}>View Git Hub Profile</a></p>

                       </div>
                   </div>
               </div>
                <div className="user-repos">
                    {
                        repos? repos.map(repo=>{
                        return <Repo repo={repo} key={repo.id}/>
                    }):<h2>Nothing to display</h2>

                    }


                </div>


            </div>


        </React.Fragment>

    );
};


export default User;