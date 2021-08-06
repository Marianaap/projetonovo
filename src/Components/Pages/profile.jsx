import React from "react";
import '../static/style.css'
import Footer from '../footer'

function Profile() {

    return (
      <div id="App">
      <div className="profile-page">
          <div className="fixed-bars-noheader">
            <Footer className="footer-comp"></Footer>
          </div>
          <div className="profile-content">
              <div className="profile-header">
                <div className="profile-user-div">
                  <img alt="img" className="profile-header-userpic" src="/userpic.svg"></img>
                  <h1 className="profile-header-username"> USERNAME </h1>
                </div>
                <button className="profile-edit"> Editar perfil </button>
              </div>
              <hr className="line-profile"></hr>
              <div className="profile-bio">
                  <h1 className="user-name"> José Osvaldo de Oliveira </h1> 
                  <p className="bio-desc">Fusce ut scelerisque est, nec placerat dolor. Morbi aliquam nisi dapibus, pharetra ligula nec, posuere risus. 
                    Nulla fringilla eros et blandit venenatis. Vivamus sed lectus ex.Curabitur eu sem sem. 
                    Nullam finibus dolor sagittis lacus gravida commodo. 
                    Fusce convallis sed arcu ut rutrum.</p>
                  <div className="propriedades">
                      <div className="user-departamento">
                        <h1 className="user-departamento-text"> Cargo </h1>
                        <h1 className="user-departamento-info"> Analista de Sistema </h1>
                      </div>
                      <div className="niver">
                        <h1 className="niver-text"> Data de Nascimento </h1>
                        <h1 className="niver-info"> 12/34/5678 </h1>
                      </div>
                  </div>
          </div>        
          </div>
        </div>
      </div>  
    );
}
export default Profile;
