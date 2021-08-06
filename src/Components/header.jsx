import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  function goToUser() {
    history.push("/index");
  }

  

  const [busca, setBusca] = React.useState("");
  console.log(busca);

  if (props.config === "Menu") {
    return (
      <div className="header-comp-div">
        <div className="feed-header">
          <h1 className="username" onClick={goToUser}>
            {" "}
            Menu{" "}
          </h1>
          <div className="user-div">
            <img alt="img" className="userpic" src="/Vector.svg"></img>
          </div>
        </div>
      </div>
    );
  } else if (props.config === "Feed")
    return (
      <div className="header-comp-div">
        <div className="feed-header">
          <img alt="img" className="logomarca" src="/logomarca.svg"></img>
          <div className="user-div">
            <h1 className="username" onClick={goToUser}>
              {" "}
              USERNAME{" "}
            </h1>
          </div>
        </div>
      </div>
    );
  else if (props.config === "Departamento")
    return (
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
    );
}

export default Header;
