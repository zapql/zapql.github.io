import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/chats/">
        <p>chats</p>
      </Route>
      <Route path="/">
        <p>olá mundo</p>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
