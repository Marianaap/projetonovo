import React, {  useState, useContext } from "react";
import { Context } from '../../context/AuthContext';
import api from '../../Services/api'
import '../static/style.css'
import history from '../../history'
import Header from '../header'
import Footer from '../footer'
import PostHeader from "../postheader";


  
  

function Menu() {

    return (
      <div id="App">
        <div className="fixed-bars">
          <Header className="header-comp" config="Menu"></Header>
          <div className="body-menu">
          <img alt="img" className="apps" src="/apps.svg"/>
          <div>
          <img alt="img" className="calc" src="/calc.svg"/>
          </div>
          <div>
          <img alt="img" className="vac" src="/vac.svg"/>
          </div>
            

          </div>
          <Footer className="footer-comp"></Footer>
        </div>
      </div>
    );
}
export default Menu;