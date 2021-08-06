import React, {useContext } from "react";
import { Context } from '../../context/AuthContext';
import '../static/style.css'
import{ LoginContext } from "../../context/loginContext";


function Login() {
  const { handleLogin } = useContext(Context);

  const { FormUsuario, setFormUsuario, FormSenha, setFormSenha } = useContext(LoginContext);

  
  return (
    <div id="App">
      <div className="login-page">
          <div className="header-login">
            <img alt="img" className="logo-svg" src="/logo.svg"></img>
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
            </form>
          </div>
      </div>      
    </div>
  );
}

export default Login;
