import React from "react";

function PostFooter() {

  return (
    <div className="postfooter-comp-div">
        <div className="postfooter-items-left">
          <p className="post-desc">Est eu cillum duis consectetur esse sit 
            ut aliquip culpa deserunt ullamco laboris.</p>            
        </div>
        <div className="postfooter-items-right">
          <img alt="img" className="like-icon" src="/like.svg"></img>            
          <img alt="img" className="comment-icon" src="/comment.svg"></img>            
        </div>
    </div>
  );
}

export default PostFooter;
