import { gql } from '@apollo/client'

export const CONNECTION_STATE = gql`
    query ConnectionState {
        connectionstate
    }
`

export const RECONNECT = gql`
    mutation Reconnect {
        reconnect
    }
`