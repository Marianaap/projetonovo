import React, { createContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
    const [FormUsuario,  setFormUsuario] = useState([]);
    const [FormSenha, setFormSenha] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        FormUsuario,
        setFormUsuario,
        FormSenha,
        setFormSenha
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
