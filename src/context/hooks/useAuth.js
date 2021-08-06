import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import api from '../../Services/api';
import{ LoginContext } from "../../context/loginContext";
import { useContext } from "react";


export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { FormUsuario, FormSenha } = useContext(LoginContext);
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin(e) {
    e.preventDefault();
    console.log('teste')
    const { data } = await api.post('login', {}, {
        auth: {
          username: FormUsuario,
          password: FormSenha
        }
      })

    localStorage.setItem('token', JSON.stringify(data));
    api.defaults.headers.Authorization = `Bearer ${data}`;
    setAuthenticated(true);
    history.push('/index');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}