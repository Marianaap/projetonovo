import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import { LoginProvider } from './context/loginContext';
function App() {

  return (
    <LoginProvider>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </LoginProvider>
  );
}

export default App;