import React, { useState } from 'react'
import './App.css';
// Router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
// Apollo
import { ApolloProvider } from '@apollo/client'
import { client } from './store/Apollo'
// Page
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import RegisterNewInstance from './pages/RegisterNewInstance'
import OpenConnection from './pages/OpenConnection'

const App = () => {
  const [state, dispatch] = useState([])
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <LandingPage />
          </Route>
          <Route path="/registration">
            <RegisterNewInstance />
          </Route>
          <Route path="/open/:token?">
            <OpenConnection />
          </Route>
          <Route path="/chats/:chatId?">
            <Dashboard state={state} dispatch={dispatch} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
