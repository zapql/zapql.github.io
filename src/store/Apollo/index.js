import { ApolloClient, InMemoryCache } from '@apollo/client'
import { split, HttpLink } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context';

// Code:
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaGFyZCI6IjU1NjU5NjkxMDI5NSIsImlhdCI6MTYxNDA5NjI3Nn0.fNgOsRfM0y0-lQOZmhqn3NA7h3lR9EcOWyIiSqdTxBI"

/**
 * Permite recuperar o header e incluir autenticacao.
 * Deve ser concatenado com httpLink e ou wsLink.
 */
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "",
    }
  }
});

const httpLink = new HttpLink({
  uri: 'http://zapql.com:4000'
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
  authLink.concat(httpLink), // so esta passando header aqui por enquanto
)

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})
