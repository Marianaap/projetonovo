
  
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Login from '../src/Components/Pages/login';
import Index from './Components/Pages/index';
import Feed from './Components/Pages/feed';
import Menu from './Components/Pages/menu';
import Profile from './Components/Pages/profile';
import Departamento from './Components/Pages/departamento';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);
  

    if (loading) {
      return <div className="loading-screen">
      <div className="loading-circle"></div>
      </div>;
      
    }


    if (isPrivate && !authenticated) {
      return <Redirect to="/login" />
    }
  
    return <Route {...rest} />;
  }
  

  export default function Routes() {
    return (
      <Switch>
        <CustomRoute exact path="/login" component={Login}/>
        <CustomRoute  isPrivate exact  path="/index" component={Index}/>
        <CustomRoute   exact  path="/feed" component={Feed}/>
        <CustomRoute   exact  path="/menu" component={Menu}/>
        <CustomRoute   exact  path="/departamento" component={Departamento}/>
        <CustomRoute   exact  path="/profile" component={Profile}/>
      </Switch>
    );
  }