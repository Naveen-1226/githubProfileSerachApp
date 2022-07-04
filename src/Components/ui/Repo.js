import React from "react";


const Repo = (props)=>{
    const {name,html_url,description,language}=props.repo;
    return(
      <React.Fragment>
              <div className="repo">
                  <h3>
                      <a href={html_url}>{name}</a>
                  </h3>
                  <p>{description}</p>
                  {language && <small>Written in {language}</small>
                  }
              </div>



      </React.Fragment>


    );

};

export default Repo;