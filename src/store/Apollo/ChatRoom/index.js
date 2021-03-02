import { gql } from '@apollo/client'

export const SEND_TEXT_MESSAGE_MUTATION = gql`
    mutation SendMessage($to: String!, $msg: String!) {
        sendtextmessage(input: {
            to: $to, 
            msg: $msg
    }) {
        wid
        timestamp
        to
        from
        msg
        quote
        forwarded
    }
}`

export const ON_TEXT_MESSAGE_SUBSCRIPTION = gql`
    subscription {
        messages {
            __typename
            ... on TextMesage {
                wid
                timestamp
                to
                from
                msg
                quote
                forwarded
            }
        }
    }
`
