

import React, {  useContext } from "react";
import { Context } from '../../context/AuthContext';


function Index() {
  const { handleLogout } = useContext(Context);
  return (
    <div className="App">


        <h1>Index</h1>
        <button onClick={handleLogout}></button>
    </div>
  );
}

export default Index;
