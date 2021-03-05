import { ApolloClient, ApolloLink, InMemoryCache, split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'
import { setContext } from '@apollo/client/link/context';

import localforage from 'localforage'

// Code:
let AUTH_TOKEN
const contextLink = setContext(async () => {
  if (!AUTH_TOKEN) {
    AUTH_TOKEN = await localforage.getItem('token')
  }
  return { AUTH_TOKEN }
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "",
    }
  }
});

const httpLink = new HttpLink({
  uri: 'https://zapql.com/graphql'
})

const wsLink = new WebSocketLink({
  uri: 'wss://zapql.com/graphql',
  options: {
    reconnect: true,
    connectionParams: () => ({
      authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "",
    }),
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
)

export const client = new ApolloClient({
  link: ApolloLink.from([
    contextLink,
    splitLink
  ]),
  cache: new InMemoryCache()
})
