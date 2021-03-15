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
import NewInstance from './pages/NewInstance'
import OpenConnection from './pages/OpenConnection'
import Logout from './pages/Logout'

const App = () => {
  const [state, dispatch] = useState({auth: false})
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <LandingPage />
          </Route>
          <Route path="/registration">
            <NewInstance />
          </Route>
          <Route path="/open/:token?">
            <OpenConnection />
          </Route>
          <Route path="/chats/:chatId?">
            <Dashboard state={state} dispatch={dispatch} />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
