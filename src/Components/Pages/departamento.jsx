import React, { useState, useContext } from "react";
import { Context } from "../../context/AuthContext";
import api from "../../Services/api";
import "../static/style.css";
import history from "../../history";
import Header from "../header";
import Footer from "../footer";
import PostHeader from "../postheader";

function Departamento() {
  const [busca, setBusca] = React.useState("");
  console.log(busca);
  
  const [departamentos, setDepartamentos] = React.useState([]);
  
  React.useEffect(async ()=> {
    const token= await localStorage.getItem('token')
    const res = await api.get("/departamentosbanco",{headers:{
      Authorization:`x-access-tokens ${token}`
        }})
          setDepartamentos(res.data)
  },[])
  console.log(departamentos)
  const deptosSearch =
    busca.length > 0
      ? departamentos.filter(
          (departamento) =>
            (departamento.nome== busca) 
        )
      : departamentos;
        console.log (deptosSearch)
  return (
    <div id="App">
      <div className="fixed-bars">
        {/* <Header className="header-comp" config="Departamento"></Header> */}
        <div className="header-comp-div">
          <div className="search-container">
            <div className="search">
              <input
                value={busca}
                placeholder="Pesquisar Departamento..."
                onChange={(e) => setBusca(e.target.value)}
              />
              <img src="/search.svg" />
            </div>
          </div>
        </div>
        <div className="depto-content">
          {deptosSearch.map((departamento) => (
            <div className="body-depto">
              <img src={departamento.img} />
              <p>{departamento.nome}</p>
            </div>
          ))}
        </div>
        <Footer className="footer-comp"></Footer>
      </div>
    </div>
  );
}
export default Departamento;
