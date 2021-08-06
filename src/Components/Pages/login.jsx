

import React, {  useState, useContext } from "react";
import { Context } from '../../context/AuthContext';
import api from '../../Services/api'
import '../static/style.css'
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [FormUsuario,  setFormUsuario] = useState([]);
    const [FormSenha, setFormSenha] = useState([]);
    const { handleLogin } = useContext(Context);


    


   function atalho(){
      history.push("/feed")
  };


  return (
    <div id="App">
      <div className="login-page">
          <div className="header-login">
            <img className="logo-svg" src="/logo.svg"></img>
          </div>
          <div className="login-box">
            <h1 className="login-title">FAÇA LOGIN</h1>
            <hr className="line"></hr>
            <form className="login-form"  onSubmit={handleLogin}>
              <h3 className="input-label">MATRÍCULA</h3>
              <input type="number" className="input" value={FormUsuario} onChange={(e) => setFormUsuario(e.target.value)} ></input>
              <h3 className="input-label">SENHA</h3>
              <input type="password" className="input" value={FormSenha}onChange={(e) =>  setFormSenha(e.target.value)}></input>
              <button className="enviar-button" type="submit"> ENTRAR </button>
              <a onClick={atalho}> FEED </a>
            </form>
          </div>
      </div>      
    </div>
  );
}

export default Login;
