import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Dashboard from './pages/Dashboard'

import datazero from './store/datazero'

const App = () => {
  const [state, dispatch] = useState(datazero)
  
  const redirectToDashboard = () => <Redirect to="/chats" />
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chats/:chatId?">
          <Dashboard state={state} dispatch={dispatch} />
        </Route>
        <Route exact path="/" render={redirectToDashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
