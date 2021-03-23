import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/';


const Main = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Main;
