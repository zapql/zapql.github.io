import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client'

import Dashboard from './pages/Dashboard'

import datazero from './store/datazero'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://zapql.com:4000',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

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
          <Route exact path="/" render={redirectToDashboard} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
