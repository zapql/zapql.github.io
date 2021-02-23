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
import { split, HttpLink } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

const httpLink = new HttpLink({
  uri: 'http://zapql.com:4000',
})

const wsLink = new WebSocketLink({
  uri: 'ws://zapql.com:4000/graphql',
  options: {
    reconnect: true
  }
})

/**
 * A funcao split faz com que o client diferencie o tipo de requisicao.
 * Se for query e mutation, usa o httpLink;
 * Se for subscription usa o wsLink.
 */
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link: splitLink,
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
