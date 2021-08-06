

import React from "react";
import '../static/style.css'
import Header from '../header'
import Footer from '../footer'
import PostHeader from "../postheader";
import PostFooter from "../postfooter";

function Feed() {

  return (
    <div id="App">
      <div className="fixed-bars">
        <Header className="header-comp" config="Feed"></Header>
        <Footer className="footer-comp"></Footer>
      </div>
      <div className="feed-page">
        <div className="feed-content">
          <PostHeader></PostHeader>
          <img alt="img" className="post" src="/placeholder.svg"></img>
          <PostFooter></PostFooter>
          <PostHeader></PostHeader>
          <img alt="img" className="post" src="/placeholder.svg"></img>
          <PostFooter></PostFooter>
          <PostHeader></PostHeader>
          <img alt="img" className="post" src="/placeholder.svg"></img>
          <PostFooter></PostFooter>
          <PostHeader></PostHeader>
          <img alt="img" className="post" src="/placeholder.svg"></img>
          <PostFooter></PostFooter>
          <PostHeader></PostHeader>
          <img alt="img" className="post" src="/placeholder.svg"></img>
          <PostFooter></PostFooter>
        </div>
      </div>      
    </div>
  );
}

export default Feed;
