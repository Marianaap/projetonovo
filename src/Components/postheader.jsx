import React from "react";

function PostHeader() {

  return (
    <div className="postheader-comp-div">
        <div className="user-post-div">            
            <img alt="img" className="userpic" src="/userpic.svg"></img>
            <h1 className="username"> USERNAME </h1>
        </div>
        <div className="postheader-items-right">            
            <h1 className="time-text"> 7h atrás </h1>
            <img alt="img" className="options-post" src="/options.svg"></img>
        </div>
    </div>
  );
}

export default PostHeader;
