import React from "react";
import { useHistory } from "react-router-dom";


function Footer() {
  const history = useHistory();
  function goToHome(){
    history.push("/feed")
  }
  return (
    <div className="footer-comp-div">
      <div className="feed-footer">
        <img alt="img" className="item-footer" src="/menu.svg"></img>
        <img alt="img" className="item-footer" src="/explore.svg"></img>
        <img alt="img" onClick={goToHome} className="item-footer" src="/home.svg"></img>
        <img alt="img" className="item-footer" src="/feed.svg"></img>
        <img alt="img" className="item-footer" src="/social.svg"></img>
      </div>      
    </div>
  );
}

export default Footer;
