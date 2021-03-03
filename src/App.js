import React, { useState } from 'react'
import './App.css';
// Router
import {
  BrowserRouter,
  Redirect,
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

// Temp
import datazero from './store/datazero'

const App = () => {
  const [state, dispatch] = useState(datazero)
  
  const redirectToDashboard = () => <Redirect to="/chats" />
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/chats/:chatId?">
            <Dashboard state={state} dispatch={dispatch} />
          </Route>
          <Route exact path="/" >
            <LandingPage />
          </Route>
          <Route path="/registration">
            <RegisterNewInstance />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
