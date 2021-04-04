import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/';
import Profile from '../pages/authenticated/Profile';
import Games from '../pages/authenticated/Games';

const Main = () => (
  <Switch>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/games">
      <Games />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Main;
