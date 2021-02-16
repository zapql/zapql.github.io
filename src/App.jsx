import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { reducer, datazero } from './redux';
import Chats from './pages/Chats';

const App = () => {
  const [state, dispatch] = useReducer(reducer, datazero);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chats/">
          <Chats state={state} dispatch={dispatch} />
        </Route>
        <Route path="/">
          <p>olá mundo</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
