import { gql } from '@apollo/client'

export const ALL_CHATS_QUERY = gql`
    query AllChats {
        allchats
    }
`