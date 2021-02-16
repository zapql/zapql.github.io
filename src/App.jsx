import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { reducer, datazero } from './redux';
import Chat from './pages/Chat';

const App = () => {
  const [state, dispatch] = useReducer(reducer, datazero);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chats/">
          <Chat state={state} dispatch={dispatch} />
        </Route>
        <Route path="/">
          <p>olá mundo</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
